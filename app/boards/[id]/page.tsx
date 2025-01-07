import BoardDetail from "./board-detail";

export default function BoardDetailPage({params}: {params:{id: string}}){
    const {id} =  params;
    return(
        <>
            <section>
                <BoardDetail params={{id}}></BoardDetail>
            </section>
        </>
    ); 

}