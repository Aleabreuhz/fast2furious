import Footer from "../../components/commons/Footer";
import Header from "../../components/commons/Header";
import { FaRegTrashAlt, FaEdit } from "react-icons/fa";
import { v4 as uuidv4, v5 as uuidv5 } from "uuid"
import { useState, useEffect, useRef } from "react";
import CarsService from "../../services/coches.service"
import "./Coches.css"


function Cars() {
  const [carsType, setCarsType] = useState("Nissan");
  const [cars, setCars] = useState([]);
  const [editKey, setEditKey] = useState(null);
  const refForm = useRef(null);
  const [image, setImage] = useState([null]);
  let imgName = uuidv4();

  const changeCarsTypeValue = (e) => {
    setCarsType(e.target.value);
  }


  const getAllCars = () => {
    CarsService.getAllCars()
      .then((items) => {
        let allCars = [];
        items.forEach(item => {
          const key = item.key;
          const data = item.val();
          allCars.push({
            key: key,
            brand: data.brand,
            model: data.model,
            driver: data.driver,
            img: data.img
          });
        });
        setCars([...allCars]);
      })
      .catch((err) => {
        console.error(err);
      });
  }

  const handleImageChange = (e) => {
    setImage(e.target.files[0])
  }

  const handleImageSubmit = (e) => {
    {
      e.preventDefault();
      const imgName = uuidv4();
      CarsService.uploadCarsImage(image, imgName).then((response) => {

        CarsService.getCarsImage(response.ref).then(res => {
          const brand = e.target.brand.value;
          const model = e.target.model.value;
          const driver = e.target.driver.value;
          const img = res;
          CarsService.addCars(brand, model, driver, img).then((response) => {
            console.log("Coche subido")
          })
        })
      })
    }
  }

  const removeCars = (key) => {
    CarsService.removeCars(key).then((res) => {
      getAllCars();
    });
  }

  const addCars = (e) => {
    e.preventDefault();
    const brand = e.target.brand.value;
    const model = e.target.model.value;
    const driver = e.target.driver.value;
    const img = imgName;
    CarsService.addCars(brand, model, driver, img).then((res) => {
      refForm.current.reset();
      setCars(oldValues => [...oldValues, { key: res.key, brand, model, driver, img }])
    })
  }

  const editCars = (e) => {
    e.preventDefault();
    const brand = e.target.brand.value;
    const model = e.target.model.value;
    const driver = e.target.driver.value;
    const img = imgName;
    if (editKey) { // Verificar que hay una clave de edición válida
      CarsService.editCars(editKey, { brand, model, driver, img }).then(() => {
        refForm.current.reset();
        setEditKey(null);
        getAllCars();
      }).catch((error) => {
        console.error("Error updating car:", error);
      });
    } else {
      console.error("No edit key provided."); // Manejar el caso en que no hay una clave de edición
    }
  }

  const handleEdit = (car) => {
    setEditKey(car.key);
    refForm.current.brand.value = car.brand;
    refForm.current.model.value = car.model;
    refForm.current.driver.value = car.driver;
    // refForm.current.img.value = car.img;
  }

  useEffect(() => {
    getAllCars();
  }, []);

  return (
    <>
      <div className="cars-page">
        <Header />

        <div className="cars-list-main-container">
          <div className="cars-form-container">
            <form id="cars-form" onSubmit={handleImageSubmit} ref={refForm}>
              <input className="rounded-input" type="text" name="brand" placeholder="brand" />
              <input className="rounded-input" type="text" name="model" placeholder="model" />
              <input className="rounded-input" type="text" name="driver" placeholder="driver" />
              <input type="file" onChange={handleImageChange} className="cars-input" />
              <input className="rounded-input" type="submit" value="Add Car" />
              <input className="rounded-input" type="submit" value="Edit Car" />
            </form>
          </div>
          <h3>Busca tu vehiculo preferido</h3>
          <form className="cars-filter">
            <select value={carsType} onChange={changeCarsTypeValue}>
              <option value="Nissan">Nissan</option>
              <option value="Toyota">Toyota</option>
              <option value="Ford">Ford</option>
              <option value="Honda">Honda</option>
              <option value="Dodge">Dodge</option>
            </select>
          </form>


          <div className="cars-list">
            {cars.map(c => (
              <>
                {c.brand == carsType ?
                  <div className="cars-item" key={c.key}>
                    <p>{c.brand} {c.model} {c.driver}</p>
                    <div className="cars-img"> <img src={c.img} alt="carro" /> </div>
                    <FaEdit color="black" className="edit-cars" onClick={() => handleEdit(c)} />
                    <FaRegTrashAlt color="black" className="delete-cars" onClick={() => removeCars(c.key)} />
                  </div>
                  :
                  ""}
              </>

            ))}
          </div>
        </div>
        <Footer />
      </div>
    </>

  )
}

export default Cars;
