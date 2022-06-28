/**
 * Fetch all tasks
 * @param {function} successCallback - Function that saves incoming data
 */

export const getTasks = async (successCallback) => {
    try {
        const response = await fetch(`${process.env.REACT_APP_API_URL}/tasks`, {
            headers: {
                Authorization: process.env.REACT_APP_API_KEY,
            },
        });

        const data = await response.json();

        if (data.error || typeof successCallback !== "function") {
            throw new Error("Błąd!");
        }
        successCallback(data.data);
    } catch (err) {
        console.log(err);
    }
};

export const getTasksOperations= async (successCallback, id) => {
    try {
        const response = await fetch(`${process.env.REACT_APP_API_URL}/tasks/${id}/operations`, {
            headers: {
                Authorization: process.env.REACT_APP_API_KEY,
            },
        });

        const data = await response.json();

        if (data.error || typeof successCallback !== "function") {
            throw new Error("Błąd!");
        }
        successCallback(data.data);
    } catch (err) {
        console.log(err);
    }
};

