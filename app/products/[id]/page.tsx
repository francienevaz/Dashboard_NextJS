
interface Params {
    id: string
}

const ProdutsDetailsPage = ({params: {id}} : {params: Params}) => {
    return(
        <>
            <h1>Products id: {id} </h1>
        </>
    )
};

export default ProdutsDetailsPage;