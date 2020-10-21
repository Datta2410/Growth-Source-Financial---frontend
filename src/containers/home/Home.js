import React, {useState} from 'react'
import './Home.css'
import WhiteCard from '../../components/whiteCard/WhiteCard'
import Input from '../../components/input/Input'
import Axios from 'axios'
import url from '../../constants/url'
const Home = () => {
    const[step, setStep] = useState(1)
    const [step1, setStep1] = useState([])
    const [step2, setStep2] = useState([])
    const [step3, setStep3] = useState([])
    const [step4, setStep4] = useState([])
    const [formData, setformData] = useState({
        firstName:"",
        middleName:"",
        lastName:"",
        dob:"",
        mobileNum:"",
        email:"",
        address:"",
        city:"",
        state:"",
        zipCode:0,
        officialId:"",
        idNum:"",
        placeWork:"",
        jobTitle:"",
        monthlyIncome:"",
        bankName:"",
        bankBranchName:"",
        accountNumber:"",
        accountType:"",
        loanPurpose:"",
        loanAmount:"",
    })
    const formFields = [
        //step 1
        {name:'firstName', label:'First Name'},
        {name:'middleName', label:'Middle Name'},
        {name:'lastName', label:'Last Name'},
        {name:'dob', label:'Date of Birth', type:'date'},
        {name:'mobileNum', label:'Phone Number',},
        {name:'email', label:'Email', type:'email'},
        //step 2
        {name:'address', label:'Address'},
        {name:'city', label:'City'},
        {name:'state', label:'State'},
        {name:'zipCode', label:'Zip Code'},
        //step 3
        {name:'officialId', label:'Official ID'},
        {name:'idNum', label:'ID Number'},
        {name:'placeWork', label:'Place of Work'},
        {name:'jobTitle', label:'Job Title'},
        {name:'monthlyIncome', label:'Monthly Income', type:'number'},
        //step 4
        {name:'bankName', label:'Bank Name'},
        {name:'bankBranchName', label:'Branch Name'},
        {name:'accountNumber', label:'Account Number'},
        {name:'accountType', label:'Account Type'},
        {name:'loanPurpose', label:'Purpose of Loan'},
        {name:'loanAmount', label:'Loan Amount', type:'Number'},
    ]
    
    const inputHandler = (e, val) => {
        setformData({
            ...formData,
            [val]: e.target.value
        })
    }

    React.useEffect(() => {
        let i = 1
        let formContent = formFields.map(field => {
            let name = formData[field.name]
            
            return(
                <div className='field'>
                <Input
                    id={i+1}
                    name={field.name}
                    label={field.label}
                    placeholder={field.label}
                    value={name}
                    type={field.type ? field.type : 'text'}
                    onChange={(e) => inputHandler(e, field.name)}
                    size="wide"
                />
                </div>
            )
        })
        setStep1(formContent.splice(0,6))
        setStep2(formContent.splice(0,4))
        setStep3(formContent.splice(0,5))
        setStep4(formContent)
    }, [formData])
    const stepSwitch = (s) => {
        switch (s) {
            case 1:
                return step1
                break;
            case 2:
                return step2
                break;
            case 3:
                return step3
                break;
            case 4:
                return step4
                break;
            
            default:
                break;
        }
    }
    const incStep = () => {
        setStep(step + 1)
    }
    const decStep = () => {
        setStep(step - 1)
    }
    const submitHandler = async () => {
        try{
            let res = await Axios.post(url + '/loans/newLoanApp', formData)
            window.location.reload(true)
        }catch(e){
            console.log(e)
        }
    }
    return (
        <div className="home">
            <div className="overlay">
                <div className="top-head">
                   <h1>GROWTH SOURCE</h1>
                </div>
                <div className="content">
                    <div className="content-left">
                    <h1>Get a loan for all your business needs</h1>
                    
                    <pre>SME LOANS   EDUCATION INSTITUTION & HOSPITAL FUNDING</pre>
                    <pre>SECURED MACHINERY LOAN    DIGITAL LENDING SOLUTIONS & CONSUMER LOANS</pre>
                    <pre>SMALL FINANCIAL INSTITUTION FUNDING   UNSECURED BUSINESS LOANS</pre>
                    <p>
                        Starting at X.XX%
                    </p>
                    </div>
                    <div className="v-line"></div>
                    <div className="content-right">
                        <a href='#fields' className="apply">Apply Now</a>
                    </div>
                </div>   
            </div>
            <WhiteCard>
                <h1>Loan Application</h1>
                <div id='fields'>
                {stepSwitch(step)}
                </div>
                {step === 1 ? (
                    <button
                    className='inc-dec'
                    onClick={incStep}
                    >   Next
                    </button>
                )
                :step > 1 && step < 4? (
                <>
                <button
                className='inc-dec'
                onClick={decStep}
                >Previous</button>
                <button
                className='inc-dec'
                onClick={incStep}
                >Next</button>
                </>
                )
                :step === 4 ? (
                <>
                <button
                className='inc-dec'
                onClick={decStep}
                >Previous</button>
                <button
                className='inc-dec'
                onClick={submitHandler}
                >Submit Form
                </button>
                </>
                ):null}
            </WhiteCard>
        </div>
    )
}

export default Home
