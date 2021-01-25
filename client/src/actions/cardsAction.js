import { CONSTANTS } from '.';

export const addCard = (listID, formData) => {
    console.log(formData)
    return {
        type: CONSTANTS.ADD_CARD,
        payload: { formData, listID },
    };
};
