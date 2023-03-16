import DomainItem from "./DomainItem";
import clasess from './DomainList.module.css'

function DomainList(props){
return <ul>
     <div className={clasess.container}>
    {props.lists.map(domain => (
    <DomainItem
    key={domain.id}
    title={domain.title}
    description={domain.description}
    icon={domain.icon}
    />
    ))}
     </div>
     
</ul>

}
export default DomainList;