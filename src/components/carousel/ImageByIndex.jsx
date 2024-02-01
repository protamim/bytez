import { ipadPro, galaxyZ, macbookPro, smartWatch } from "@/assets/images/home/products";

export const images = [ipadPro, galaxyZ, macbookPro, smartWatch]

const imageByIndex = (index) => images[index % images.length]

export default imageByIndex;
