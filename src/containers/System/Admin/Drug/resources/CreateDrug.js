import { useRef, useState, useEffect } from "react";

// import * as actions from "../../store/actions";

import { FormattedMessage } from "react-intl";

import { useParams, useNavigate   } from "react-router-domv6";
import { useDispatch, useSelector } from "react-redux";

import {
    createDrug,
  } from "../../../../../services/drugService";

  import { toast } from "react-toastify";

export default function CreateDrug(){

    const [name, setName] = useState("");

    const { isLoggedIn, userInfo, language } = useSelector((state) => ({
        isLoggedIn: state.user.isLoggedIn,
        userInfo: state.user.userInfo,
        language: state.app.language,
      }));
  
    const dispatch = useDispatch();
    let navigate = useNavigate();

    const handleOnChangeInput = (event) => {
        let valueInput = event.target.value;
          setName(valueInput)    
        console.log("name",name)
    };

    const handleCreateDrug = async ()=>{
        let res = await createDrug({name:name})

        setName("")

        if(res){
            let message = language=="en" ? "Create new drug succeed!" : "Thêm thuốc thành công!"
            toast.success(message);
        }

        setTimeout(function(){ window.location.href = '/admin-dashboard/manage-drug'; }, 1000);
    }

    return (
      <div>
            <div className="title mb-60">
                <FormattedMessage id={"admin.manage-drug.create-drugs"} />
            </div>

            <div class="row">
                <div class="col-6">
                    <div class="form-group">
                        <label for="exampleInputEmail1"> <FormattedMessage id={"admin.manage-drug.name-drug"} /></label>
                        <input type="text" value={name} class="form-control" id="name" 
                         onChange={(event) =>
                            handleOnChangeInput(event)
                          }
                        />
                    </div>
                    <button type="submit" class="btn btn-primary" onClick={()=>handleCreateDrug()}><FormattedMessage id={"admin.manage-drug.create"} /></button>
                </div>
            </div>

            <div class="row">
                <div class="col-6"></div>
            </div>

            
      </div>
    );
}

