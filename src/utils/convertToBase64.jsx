export const convertToBase64 = (file, setter) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
        setter(reader.result);
    };
    reader.onerror = (error) => {
        console.error('Error converting file to base64:', error);
    };
};