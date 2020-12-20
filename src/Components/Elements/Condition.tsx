import { useSelector } from 'react-redux';

export const Condition = () => {
    const state = useSelector((state: any) => state);
    return (<div id=" Condition">
        <div className="condition ml-5">
            <h2 className="h2 text-muted">آرڈر کی موجودہ حالت</h2>
            <p className="text-muted"> : اگر آپ حالت شامل کرنا چاہتے ہیں</p>
            <input type="number" placeholder=" سلائی ہیں  " />
            <input className=" mt-1 " type="number" placeholder=" بغیر سلی لباس  " />
            <input className=" mt-1 " type="number" placeholder=" خراب سلائی  " />
            <input className=" mt-1 " type="number" placeholder=" کھو دیا  " />
            <input className=" mt-1 " type="number" placeholder=" پہنچا دیا گیا  " />
        </div>
    </div>
    )
}
