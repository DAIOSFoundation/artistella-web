import { Helmet } from "react-helmet-async";

function PageTitle({ title }) {
    return (
    <Helmet>
        <title>{title} | Artistella</title>
    </Helmet>
    );
}



export default PageTitle;