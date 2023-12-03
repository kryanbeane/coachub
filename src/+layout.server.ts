import type {LayoutServerLoad} from "./$types"
import
export const load: LayoutServerLoad = async (event) => {
    return {
        session: await getServerSession(event),
    }
};