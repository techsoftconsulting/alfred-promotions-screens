const FirebaseUtils = {
    getDate(firebaseDate) {
        return new Date(firebaseDate.seconds * 1000);
    }
};

export default FirebaseUtils;
