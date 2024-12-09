export default function BoardDetail({params}: {params:{id: string}}){
    const {id} = params;
    return <p>Id: {id}</p>
}