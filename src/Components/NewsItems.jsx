
const NewsItems = ({title,discription,src,url}) => {
  return (
    <div class="card bg-dark text-light mb-3 d-inline-block my-3 mx-3 px-2 py-2" style={{maxWidth:'345px'}}>
  <img src={src} style={{height:'200px',width:'320px'}}class="card-img-top" alt="..."/>
  <div class="card-body">
    <h5 class="card-title">{title.slice(0,50)}</h5>
    <p class="card-text">{discription?discription.slice(0,90):"Still Working on it. Visit after some time."}</p>
    <a href={url} class="btn btn-primary">Read Mpre</a>
  </div>
</div>
      
    
  )
}

export default NewsItems
