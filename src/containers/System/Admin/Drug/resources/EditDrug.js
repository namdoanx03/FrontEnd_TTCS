import { useRef, useState, useEffect } from "react";

// import * as actions from "../../store/actions";

import { FormattedMessage } from "react-intl";

import { useParams, useNavigate   } from "react-router-domv6";
import { useDispatch, useSelector } from "react-redux";

import {
    getDrugInfoById,
    editDrug
} from "../../../../../services/drugService";

  import { toast } from "react-toastify";

export default function EditDrug(){

    const [name, setName] = useState("");

    const dispatch = useDispatch();
    let navigate = useNavigate();

    let { drugId } = useParams();

    const { isLoggedIn, userInfo, language } = useSelector((state) => ({
        isLoggedIn: state.user.isLoggedIn,
        userInfo: state.user.userInfo,
        language: state.app.language,
      }));
    
      useEffect(async () => {
            await initializeDrugInfo(drugId)
      }, []);

    const initializeDrugInfo=async ()=>{
        let res = await getDrugInfoById(drugId)
        if(res) setName(res.name)
    }


    const handleOnChangeInput = (event) => {
        let valueInput = event.target.value;
          setName(valueInput)    
    };

    const handleEditDrug = async ()=>{
        let res = await editDrug({id:drugId, name:name})

        if(res){
            let message = language=="en" ? "Update new drug succeed!" : "Cập nhật thuốc thành công!"
            toast.success(message);
        }

        setTimeout(function(){ window.location.href = '/admin-dashboard/manage-drug'; }, 1000);
    }

    return (
      <div>
            <div className="title mb-60">
                 <FormattedMessage id={"admin.manage-drug.edit-drug"} />
            </div>

            <div class="row">
                <div class="col-6">
                    <div class="form-group">
                        <label for="exampleInputEmail1"> <FormattedMessage id={"admin.manage-drug.name-drug"} /></label>
                        <input type="text" value={name} class="form-control" id="name" placeholder="Enter name drug" 
                         onChange={(event) =>
                            handleOnChangeInput(event)
                          }
                        />
                    </div>
                    <button type="submit" class="btn btn-primary" onClick={()=>handleEditDrug()}><FormattedMessage id={"admin.manage-drug.update"} /></button>
                </div>
            </div>

            <div class="row">
                <div class="col-6"></div>
            </div>

            
      </div>
    );
}

