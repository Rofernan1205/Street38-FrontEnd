import {AdminLayout} from '../layouts';
import {HomeAdmin} from '../pages/Admin';
const routesAdmin = [
    {
        path : '/loginAdmin',
        layout : AdminLayout,
        component : HomeAdmin,
    },
];
export default routesAdmin;