import {useState, useEffect} from 'react';
function Foo() {
    const {count, setCount} = useState(0);
                        useEffect(() => {
                            console.log(count)
                        });
                        return (
                            <div>
                                <div>clicked {count} times</div>
                                <button onClick={setCount(count + 1)}></button>
                            </div>
                        )
}
export default Foo;