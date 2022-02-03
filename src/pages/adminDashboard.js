import React, { useState, useEffect } from 'react'
import Footer from '../components/layout/Footer';
import Navbar from "../components/layout/Navbar";
import StakingABI from "../contracts/Staking.json";
import getWeb3 from '../utility/getWeb3';
import { useWeb3React } from "@web3-react/core";
import Loading from '../components/Loading';
import NotificationManager from 'react-notifications/lib/NotificationManager';
import config from "../config.json";
const { StakingAddress } = config;

let AdminDashboard = () => {
    const { account, activate } = useWeb3React();
    const [web3, setWeb3] = useState({});
    const [Staking, setStaking] = useState({});
    const [initData, setInitData] = useState({
        dogeAPY: '',
        loriaAPY: '',
        dogeEli: '',
        loriaEli: '',
        dogePen: '',
        loriaPen: ''
    });
    const [DogeAPY, setDogeAPY] = useState('');
    const [LoriaAPY, setLoriaAPY] = useState('');
    const [DogeEli, setDogeEli] = useState('');
    const [LoriaEli, setLoriaEli] = useState('');
    const [DogePen, setDogePenalty] = useState('');
    const [LoriaPen, setLoriaPenalty] = useState('');
    const [activeItem, setActiveItem] = useState(-1);
    const [isLoading, setIsLoading] = useState(false);
    const [dogeClaimList, setDogeCliamList] = useState([]);
    const [cryptoClaimList, setCryptoCliamList] = useState([]);

    useEffect(async() => {
        const _web3 = await getWeb3();
        const _Staking = new _web3.eth.Contract(StakingABI, StakingAddress);
        setWeb3(_web3);
        setStaking(_Staking);
    },[]);

    useEffect(async() => {
        if (account && Staking && activeItem == -1) {
            const _dogeAPY =  await Staking.methods.DogeAPY().call();
            const _dogeEli = await Staking.methods.DogeElig().call();
            const _dogePen = await Staking.methods.DogePenalty().call();
            const _loriaAPY = await Staking.methods.LoriaAPY().call();
            const _loriaEli = await Staking.methods.LoriaElig().call();
            const _loriaPen = await Staking.methods.LoriaPenalty().call();

            setInitData({
                ...initData,
                dogeAPY: _dogeAPY,
                dogeEli: _dogeEli,
                dogePen: _dogePen,
                loriaEli: _loriaEli,
                loriaAPY: _loriaAPY,
                loriaPen: _loriaPen
            });
            
            setDogeAPY(_dogeAPY);
            setDogeEli(_dogeEli);
            setDogePenalty(_dogePen);
            setLoriaAPY(_loriaAPY);
            setLoriaEli(_loriaEli);
            setLoriaPenalty(_loriaPen);
        }
    }, [account, activeItem]);

    const importAirDropList = (e, type) => {
        
        if (!account) {
            NotificationManager.warning("Metamask is not connected!", "Warning");
            return;
        }
        const file = e.target.files[0];

        
        if (file) {
            const reader = new FileReader();
            reader.onloadend = function(e) {
                const text = e.target.result;
                processCSV(text, type)
            }
    
            reader.readAsText(file);
        }
        
        else {
            switch(type) {
                case 0:
                    setDogeCliamList([]);
                    break;
                case 1:
                    setCryptoCliamList([]);
                    break;
            }
        }
    }

    const processCSV = (str, type) => {
        const rows = str.slice(str.indexOf('\n') + 1, str.length - 1).split('\n');
        const newArray = rows.map(row => {
            row = row.slice(0, row.indexOf('\r'));
            const values = row.split(',');
            return { staker: values[0], balance: web3.utils.toWei(values[1], "ether") };
        })
        
        switch(type) {
            case 0:
                setDogeCliamList(newArray);
                break;
            case 1:
                setCryptoCliamList(newArray);
                break;
        }
    }

    const changeItem = async() => {
        try {
            setIsLoading(true);
            switch(activeItem.toString()) {
                case "0":
                    await Staking.methods.setDogeAPY(DogeAPY).send({ from: account });
                    NotificationManager.success(':D', 'Success');
                    break;
                case "1":
                    await Staking.methods.setLoriaAPY(LoriaAPY).send({ from: account });
                    NotificationManager.success(':D', 'Success');
                    break;
                    break;
                case "2":
                    await Staking.methods.setDogeElig(DogeEli).send({ from: account });
                    NotificationManager.success(':D', 'Success');
                    break;
                case "3":
                    alert();
                    await Staking.methods.setLoriaElig(LoriaEli).send({ from: account });
                    NotificationManager.success(':D', 'Success');
                    break;
                case "4":
                    await Staking.methods.setDogePenalty(DogePen).send({ from: account });
                    NotificationManager.success(':D', 'Success');
                    break;
                case "5":
                    await Staking.methods.setLoriaPenalty(LoriaPen).send({ from: account });
                    NotificationManager.success(':D', 'Success');
                    break;
            }
            window.$('#amendPopup').modal('hide');
            setActiveItem(-1);
            setIsLoading(false);
        } catch(err) {
            console.log(err)
            NotificationManager.error(';S', 'Failed');
            setIsLoading(false);
        }
    }
    
    const optionalClaim = async(type) => {
        setIsLoading(true);
        let claimList = [];
        if (!type) claimList = dogeClaimList;
        else claimList = cryptoClaimList;
        
        try {
            await Staking.methods.optionalClaim(claimList, type).send({ from: account });
            NotificationManager.success(':D', 'Success');
        } catch(err) {
            NotificationManager.error(':(', 'Failed');
        }
        setIsLoading(false);
    }

    return (
        <React.Fragment>
            { isLoading && <Loading/> }
            <Navbar/>
            <div className="coin-main py-60 ms">
                <div className="container-lg">
                    <div className="row d-flex justify-content-center">
                        <div className="admin-dashboard-bg">
                            <div className="col-sm-12 admin-dashboard-page">
                                <div className="col-lg-4 col-sm-12 border-bottom d-flex justify-content-between ">
                                    <span><small>MsDoge APY (%)</small></span>
                                    <input type="number" value={DogeAPY} onChange={ (e) => account && setDogeAPY(e.target.value) } className="admin-dashboard-input" />
                                </div>
                                {
                                    initData.dogeAPY != DogeAPY && DogeAPY > 0 ?
                                        <button
                                            type="button"
                                            className="table-btn-dashborad active"
                                            data-bs-toggle="modal"
                                            data-bs-target="#amendPopup"
                                            onClick={() => setActiveItem(0)}
                                        >Amend</button>
                                    : <button type="button" className="table-btn-dashborad">Amend</button>
                                }
                                
                            </div>
                        
                            <div className="col-sm-12 admin-dashboard-page">
                                <div className="col-lg-4 col-sm-12 border-bottom d-flex justify-content-between ">
                                    <span><small>Cryptoloria APY (%)</small></span>
                                    <input type="number" value={LoriaAPY} onChange={(e) => account && setLoriaAPY(e.target.value)} className="admin-dashboard-input" />
                                </div>
                                {
                                    initData.loriaAPY != LoriaAPY && LoriaAPY > 0 ?
                                    <button
                                        type="button"
                                        className="table-btn-dashborad active"
                                        data-bs-toggle="modal"
                                        data-bs-target="#amendPopup"
                                        onClick={() => setActiveItem(1)}
                                    >Amend</button>
                                    : <button type="button" className="table-btn-dashborad">Amend</button>
                                }
                            </div>

                            <div className="col-sm-12 admin-dashboard-page">
                                <div className="col-lg-4 col-sm-12 border-bottom d-flex justify-content-between ">
                                    <span><small>MSDOGE Withdraw Penalty</small></span>
                                    <input type="number" value={DogeEli} onChange={(e) => account && setDogeEli(e.target.value) } className="admin-dashboard-input" />
                                </div>
                                {
                                    initData.dogeEli != DogeEli && DogeEli > 0 ?
                                        <button
                                            type="button"
                                            className="table-btn-dashborad active"
                                            data-bs-toggle="modal"
                                            data-bs-target="#amendPopup"
                                            onClick={() => setActiveItem(2)}
                                        >Amend</button>
                                    : <button type="button" className="table-btn-dashborad">Amend</button>
                                }
                            </div>

                            <div className="col-sm-12 admin-dashboard-page">
                                <div className="col-lg-4 col-sm-12 border-bottom d-flex justify-content-between ">
                                    <span><small>CRYPTO Withdraw Penalty</small></span>
                                    <input type="number" value={LoriaEli} onChange={(e) => account && setLoriaEli(e.target.value)} className="admin-dashboard-input" />
                                </div>
                                {
                                    initData.loriaEli != LoriaEli && LoriaEli > 0 ?
                                        <button
                                            type="button"
                                            className="table-btn-dashborad active"
                                            data-bs-toggle="modal"
                                            data-bs-target="#amendPopup"
                                            onClick={() => setActiveItem(3)}
                                        >Amend</button>
                                    : <button type="button" className="table-btn-dashborad">Amend</button>
                                }
                            </div>
                            <div className="col-sm-12 admin-dashboard-page">
                                <div className="col-lg-4 col-sm-12 border-bottom d-flex justify-content-between ">
                                    <span><small>MSDOGE Withdraw Penalty(%)</small></span>
                                    <input type="number" value={DogePen} onChange={(e) => account && setDogePenalty(e.target.value)} className="admin-dashboard-input" />
                                </div>
                                {
                                    initData.dogePen != DogePen && DogePen > 0 ?
                                        <button
                                            type="button"
                                            className="table-btn-dashborad active"
                                            data-bs-toggle="modal"
                                            data-bs-target="#amendPopup"
                                            onClick={() => setActiveItem(4)}
                                        >Amend</button>
                                    : <button type="button" className="table-btn-dashborad">Amend</button>
                                }
                            </div>
                            <div className="col-sm-12 admin-dashboard-page">
                                <div className="col-lg-4 col-sm-12 border-bottom d-flex justify-content-between ">
                                    <span><small>CRYPTO Withdraw Penalty(%)</small></span>
                                    <input type="number" value={LoriaPen} onChange={(e) => account && setLoriaPenalty(e.target.value)} className="admin-dashboard-input" />
                                </div>
                                {
                                    initData.loriaPen != LoriaPen && LoriaPen > 0 ?
                                        <button
                                            type="button"
                                            className="table-btn-dashborad active"
                                            data-bs-toggle="modal"
                                            data-bs-target="#amendPopup"
                                            onClick={() => setActiveItem(5)}
                                        >Amend</button>
                                    : <button type="button" className="table-btn-dashborad">Amend</button>
                                }
                            </div>
                            <div className="col-sm-12 admin-dashboard-page">
                                <div className="col-lg-4 col-sm-12 border-bottom d-flex justify-content-between ">
                                    <label htmlFor="clainListFiles" className="w-100 cursor-pointer clainListFiles" onClick={(e) => !account ?  e.preventDefault() : null}></label>
                                    <input
                                        id="clainListFiles"
                                        hidden
                                        type="file"
                                        onChange={(e) => importAirDropList(e, 0)}
                                    />
                                </div>
                                {
                                    dogeClaimList.length > 0 ?
                                        <button
                                            type="button"
                                            className="table-btn-dashborad active"
                                            onClick={() => optionalClaim(0)}
                                        >Deploy</button>
                                    : <button type="button" className="table-btn-dashborad">Deploy</button>
                                }
                            </div>

                            <div className="col-sm-12 admin-dashboard-page">
                                <div className="col-lg-4 col-sm-12 border-bottom d-flex justify-content-between ">
                                    <label htmlFor="clainListFiles" className="w-100 cursor-pointer clainListFiles crypto" onClick={(e) => !account ?  e.preventDefault() : null}></label>
                                    <input
                                        id="clainListFiles"
                                        hidden
                                        type="file"
                                        onChange={(e) => importAirDropList(e, 1)}
                                    />
                                </div>
                                {
                                    cryptoClaimList.length > 0 ?
                                        <button
                                            type="button"
                                            className="table-btn-dashborad active"
                                            onClick={() => optionalClaim(1)}
                                        >Deploy</button>
                                    : <button type="button" className="table-btn-dashborad">Deploy</button>
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Modal */}

            <div className="modal fade" id="amendPopup" tabIndex="-1" aria-labelledby="amendPopup" aria-hidden="true" data-bs-backdrop='static'>
                <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-body rel">
                        <button type="button" className="closebtn" data-bs-dismiss="modal" aria-label="Close">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 17l-5-5m0 0l5-5m-5 5h12" />
                            </svg>
                        </button>
                        <div className="heading-text-popupm">
                            <h5 className="my-3 text-center ">MsDoge Staking Amendment</h5>
                            <form action="">
                            <div className="input-bal">
                                <div className="row pl-4 pr-4">
                                    {/* <div className="mt-3 col-sm-12 d-flex justify-content-between">
                                        <div className="p-2"><b>MsDoge APY% </b></div>
                                        <div className="p-2"><small>2</small></div>
                                    </div> */}
                                    <div className="col-sm-12">
                                        <div className="p-2 stake-btn">
                                        <button
                                            type="button"
                                            className="table-btn btn py-2 px-4 w-100 mb-3"
                                            onClick={changeItem}
                                        >Amend</button>
                                        <div
                                            className="claim-btn-failed color5 py-2 px-4 w-100 text-center"
                                            onClick={() => setActiveItem(-1)}
                                            data-bs-dismiss="modal"
                                        >Cancel</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            </form>
                        </div>
                    </div>
                </div>
                </div>
            </div>

            <Footer />
        </React.Fragment>
    )
}

export default AdminDashboard;
