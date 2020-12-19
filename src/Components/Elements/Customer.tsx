import { useSelector } from 'react-redux';

export const Customers = (props: any) => {
    const state = useSelector((state: any) => state);
    return (

        <div className="text-left">
            {state.Customers.map((Customer: any, index: number) => {
                return (
                    <div className="mt-1  text-left ml-5" key={index}>
                        <button className="btn btn-outline-primary d-inline m-1 ml-5" onClick={() => {
                        }}>نکالنا</button>
                        <button className="btn btn-outline-danger d-inline m-1" onClick={() => {
                        }}>آرڈر</button>
                        <button className="btn btn-outline-success d-inline m-2 " onClick={() => {
                        }}>پیمائش                </button>
                        <h3 className="h3 text-muted d-inline mt-2">{Customer}</h3>
                    </div>
                )
            })}
        </div>
    );
};
