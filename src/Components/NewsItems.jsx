import image from '../assets/news.jpeg'

const NewsItems = ({title,discription,src,url}) => {
  return (
    <div className="card bg-dark text-light mb-3 d-inline-block my-3 mx-3 px-2 py-2" >
  <img src={src?src: image}style={{height:'200px',width:'320px'}}className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">{title.slice(0,50)}</h5>
    <p className="card-text">{discription?discription.slice(0,90):"Still Working on it. Visit after some time."}</p>
    <a href={url} className="btn btn-primary">Read Mpre</a>
  </div>
</div>
      
    
  )
}

export default NewsItems
