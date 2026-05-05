import BigCard from '../../components/BigCard/BigCard';
import MediumCard from '../../components/MediumCard/MediumCard';
import SmallCard from '../../components/SmallCard/SmallCard';
import './ListOfPosts.css';


function ListOfPosts() {
    return ( 
        <div className='listOfPosts'>
            <div>
                <BigCard></BigCard>
                <BigCard></BigCard>
                <div className='mediumCards'>
                    <MediumCard></MediumCard>
                    <MediumCard></MediumCard>
                    <MediumCard></MediumCard>
                    <MediumCard></MediumCard>
                    <MediumCard></MediumCard>
                    <MediumCard></MediumCard>
                </div>
            </div>
            <div className='smallCards'>
                <SmallCard></SmallCard>
                <SmallCard></SmallCard>
                <SmallCard></SmallCard>
                <SmallCard></SmallCard>
                <SmallCard></SmallCard>
                <SmallCard></SmallCard>
                <SmallCard></SmallCard>
                <SmallCard></SmallCard>
                <SmallCard></SmallCard>
                <SmallCard></SmallCard>
            </div>
        </div>
    );
}

export default ListOfPosts;