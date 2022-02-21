import { useEffect, useState } from "react";
import DoorComponent from "./DoorComponent";
import { DoorInterface } from "../constants/commons";
import API from "../api/api";
import { useParams } from "react-router";

const DoorsViewComponent: React.FC = () => {
    const [isLoading, setLoading] = useState(true);
    const [fetchedDoors, setFetchedDoors] = useState<DoorInterface[]>([]);

    const doorsImages = [
        "https://cdn11.bigcommerce.com/s-4mdmn43za8/images/stencil/800x800/products/510/1586/grand-entry-doors-portland-contemporary-mahogany-double-entry-door__90361.1639416732.jpg?c=2",
        "https://cdn11.bigcommerce.com/s-oygz8e6gr0/images/stencil/1000x1000/products/120/382/beverly__10955.1557432628.jpg?c=2",
        "https://www.comtuer.com/fileadmin/standard/layout/images/T%C3%BCren/Haust%C3%BCren/Moderne_Haust%C3%BCren/Comtuer_Moderne-Haust%C3%BCren_03_M.jpg",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT93-9ylJ7rKoz8BkaCrTeJQP2PcYbBXGnVbA&usqp=CAU",
        "https://www.barausse.com/app/uploads/2019/12/PORTE_MODERNE_SCORREVOLE_FILA_NOCE_AMERICANO_NATURE-800x800.jpg",
        "https://www.marvin.com/-/media/project/tenant/marvin/blog/front-door-trends/front-doors-02.jpg?h=553&w=800&ts=6071311f-1750-4093-adef-1df87f78fdfc&hash=A7B0B78D92A5CDD27A032C54C76B6C65",
        "https://www.livingwoodwindows.co.uk/wp-content/uploads/2015/11/modern-door-1-567x567@2x.jpg",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSu2WsPjANAXXIWH2yz5mJndBwQMSvvODUSEg&usqp=CAU",
        "https://force8.uk/wp-content/uploads/2018/11/valencia-door-for-modern-page.jpg",
        "https://images.squarespace-cdn.com/content/v1/50a4739ae4b000dda4d98149/1404186421933-O4S2L8HD35QEEV3B2VNY/dickinson.jpg",
    ];

    let params = useParams();

    useEffect(() => {
        const pageNum = params.pageNum ? parseInt(params.pageNum) : 1;
        API.get<DoorInterface[]>(`doors_detailed_list/page/${pageNum}`)
            .then((res) => {
                setFetchedDoors(res.data);
                setLoading(false);
            })
            .catch((err) => {
                console.error(err);
                setLoading(false);
            });
    }, []);

    if (isLoading) {
        return (
            <div className="loading--container">
                <img
                    src={
                        "https://cdn.vox-cdn.com/thumbor/DMXD2zLif49j6IP2i3Avda2Cyl0=/1400x1400/filters:format(jpeg)/cdn.vox-cdn.com/uploads/chorus_asset/file/22312759/rickroll_4k.jpg"
                    }
                />
            </div>
        );
    }

    return (
        <>
            <div className="data--container">
                <div className="door-component--title">
                    <span>Doors:</span>
                </div>
                <div className="separator--line"></div>
                <div className="detailed-view--container">
                    {fetchedDoors.length ? (
                        fetchedDoors.map((door) => (
                            <div key={door.id}>
                                <DoorComponent
                                    image={
                                        doorsImages[
                                            Math.floor(
                                                Math.random() *
                                                    doorsImages.length
                                            )
                                        ]
                                    }
                                    door={door}
                                />
                            </div>
                        ))
                    ) : (
                        <span className="detailed-view--no-data">
                            {`No doors found. 🤖`}
                        </span>
                    )}
                </div>
            </div>
        </>
    );
};

export default DoorsViewComponent;
