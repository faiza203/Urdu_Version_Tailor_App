import { useSelector } from 'react-redux';

export const Condition = () => {
    const state = useSelector((state: any) => state);
    const client: any = state.customer[0];
    return (<div id=" Condition">
        { state.Order.length > 0 ?
            state.Order.map((order: any[], index: number) => {
                if (order[0].toUpperCase() === client.toUpperCase()) {
                    return (
                        <div className="condition ml-5" key={index}>
                            <h1 className="h1 text-muted">Condition</h1>
                            <p className="text-muted">If you want to  add   Condition : </p>
                            <input type="number" placeholder=" Stitched  " />
                            <input className=" mt-1 " type="number" placeholder=" Delivered  " />
                            <input className=" mt-1 " type="number" placeholder=" Un Stitched  " />
                            <input className=" mt-1 " type="number" placeholder=" Lost  " />
                            <input className=" mt-1 " type="number" placeholder=" Out of Order Stitched  " />
                        </div>
                    )
                }
            }) :
            null
        }

    </div>
    )
}
