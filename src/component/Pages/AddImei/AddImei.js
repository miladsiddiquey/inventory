import React from 'react';
import './AddImei.css';

const AddImei = () => {
    return (
        <div className="addImei" >
            <form>
                <div className="form-group">
                    <label for="exampleInputEmail1">Product Id</label>
                    <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Id" />

                </div>
                <div className="form-group">
                    <label for="exampleInputPassword1">Supplier</label>
                    <input type="text" className="form-control" id="exampleInputPassword1" placeholder="Supplier" />
                </div>
                <br />

                <button type="submit" className="btn btn-primary">Submit</button>
            </form>

            <table class="table">
                <thead>
                    <tr>

                        <th scope="col">S.I</th>
                        <th scope="col">IEMI</th>

                    </tr>
                </thead>
                <tbody>
                    <tr>

                        <td>1</td>
                        <td>1s1e1t425</td>

                    </tr>

                </tbody>
            </table>
        </div>
    );
};

export default AddImei;