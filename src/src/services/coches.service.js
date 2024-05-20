import firebaseService from "../firebase";
import { ref, get, remove, push, update } from "firebase/database";
import { getDownloadURL, uploadBytes, ref as storageRef } from "firebase/storage"

const dbRef = ref(firebaseService.db, "/cars");

const getAllCars = () => {
    return get(dbRef);
};

const addCars = (brand, model, driver, img) => {
    return push(dbRef, {
        brand: brand,
        model: model,
        driver: driver,
        img: img
    });
};

const removeCars = (key) => {
    const dbRefCars = ref(firebaseService.db, `/cars/${key}`);
    return remove(dbRefCars);
};

const editCars = (key, newData) => {
    const dbRefCar = ref(db, `/cars/${key}`);
    return update(dbRefCar, newData);
};
const uploadCarsImage = (image, imgName) => {
    console.log(image);
    const myStorageRef = storageRef(firebaseService.storage, imgName);
    return uploadBytes(myStorageRef, image);
}
const getCarsImage = (snapshotUrl) => {
    return getDownloadURL(snapshotUrl);
}

export default {
    getAllCars,
    addCars,
    removeCars,
    editCars,
    uploadCarsImage,
    getCarsImage
};