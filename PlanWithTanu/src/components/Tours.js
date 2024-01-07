import Card from './Card';
function Tours(props){
   return(
<div>
    <div className="container">
    <div>
       <h2 className="title">Plan With Tanu</h2>
    </div>
    </div>
    <div className="Cards">
       {
        props.tours.map((tour)=>{
            return <Card {...tour} removeTour={props.removeTour}></Card>
       })
       }
    </div>        
</div>
   )
}
export default Tours