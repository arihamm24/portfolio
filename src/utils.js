export const getImageURL = (path) => {
    return new URL("assets/${path}", import.meta.URL).href;
}