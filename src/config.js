import { config } from "dotenv";
config()

export const BD_HOST=process.env.BD_HOST || bwzwfarfe5g3jjz6l07q-mysql.services.clever-cloud.com
/* export const BD_DATABASE=process.env.BD_DATABASE || baseproyecto20242 */
export const BD_DATABASE=process.env.BD_DATABASE || bwzwfarfe5g3jjz6l07q
export const DB_USER=process.env.DB_USER || root
export const DB_PASSWORD=process.env.DB_PASSWORD || ''
export const DB_PORT=process.env.DB_PORT || 3306
export const PORT=process.env.PORT || 3000