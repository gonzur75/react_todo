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

export const getTasksOperations = async (id) => {

    try {
        const response = await fetch(`${process.env.REACT_APP_API_URL}/tasks/${id}/operations`, {
            headers: {
                Authorization: process.env.REACT_APP_API_KEY,
            },
        });

        const data = await response.json();

        if (data.error) {
            throw new Error("Błąd!");
        }

        return data.data
    } catch (err) {
        console.log(err);
    }
};

export const AddTaskOperations = async (data = {}, id) => {

    try {
        const response = await fetch(`${process.env.REACT_APP_API_URL}/tasks/${id}/operations`, {
            headers: {
                Authorization: process.env.REACT_APP_API_KEY,
                "Content-Type": "application/json"
            },
            method: 'POST',
            body: JSON.stringify(data)
        });


    } catch (err) {
        console.log(err);
    }

};
export const ModifyTaskOperation = async (data = {}, operationId) => {

    try {
        await fetch(`${process.env.REACT_APP_API_URL}/operations/${operationId}`, {
            headers: {
                Authorization: process.env.REACT_APP_API_KEY,
                "Content-Type": "application/json"
            },
            method: 'PUT',
            body: JSON.stringify(data)
        });


    } catch (err) {
        console.log(err);
    }
};

export const RemoveTaskOperation = async (operationId) => {

    try {
        await fetch(`${process.env.REACT_APP_API_URL}/operations/${operationId}`, {
            headers: {
                Authorization: process.env.REACT_APP_API_KEY,
            },
            method: 'DELETE',
        });
    } catch (err) {
        console.log(err);
    }
};