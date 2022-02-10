import React, { useState, useEffect } from "react";
import Footer from "../components/layout/Footer";
import Navbar from "../components/layout/Navbar";
import StakingABI from "../contracts/Staking.json";
import getWeb3 from "../utility/getWeb3";
import { useWeb3React } from "@web3-react/core";
import Loading from "../components/Loading";
import NotificationManager from "react-notifications/lib/NotificationManager";
import config from "../config.json";
import Box from "./Box";
import { Switch } from "@mui/material";

const { StakingAddress } = config;

let AdminDashboard = () => {
	const { account, activate } = useWeb3React();
	const [web3, setWeb3] = useState({});
	const [Staking, setStaking] = useState({});
	const [initData, setInitData] = useState({
		dogeAPY: "",
		dogeEli: "",
		dogePen: "",

		loriaAPY: "",
		loriaEli: "",
		loriaPen: "",

		paraDAIAPY: "",
		paraDAIEli: "",
		paraDAIPen: "",

		paraUSDTAPY: "",
		paraUSDTEli: "",
		paraUSDTPen: "",

		paraUSDCAPY: "",
		paraUSDCEli: "",
		paraUSDCPen: "",

		paraPAXAPY: "",
		paraPAXEli: "",
		paraPAXPen: "",

		paraTUSDAPY: "",
		paraTUSDEli: "",
		paraTUSDPen: "",

		paraUSDPAPY: "",
		paraUSDPEli: "",
		paraUSDPPen: "",

		alphaELONAPY: "",
		alphaELONEli: "",
		alphaELONPen: "",

		alphaSHIBAPY: "",
		alphaSHIBEli: "",
		alphaSHIBPen: "",

		alphaMSDOGEAPY: "",
		alphaMSDOGEEli: "",
		alphaMSDOGEPen: "",

		alphaHOGEAPY: "",
		alphaHOGEEli: "",
		alphaHOGEPen: "",

		alphaSMIAPY: "",
		alphaSMIEli: "",
		alphaSMIPen: "",

		alphaSUSHIAPY: "",
		alphaSUSHIEli: "",
		alphaSUSHIPen: "",

		omegaCRVAPY: "",
		omegaCRVEli: "",
		omegaCRVPen: "",

		omegaKNCAPY: "",
		omegaKNCEli: "",
		omegaKNCPen: "",

		omegaZRXAPY: "",
		omegaZRXEli: "",
		omegaZRXPen: "",

		omegaBNTAPY: "",
		omegaBNTEli: "",
		omegaBNTPen: "",

		omegaUNIAPY: "",
		omegaUNIEli: "",
		omegaUNIPen: "",

		omegaMKRAPY: "",
		omegaMKREli: "",
		omegaMKRPen: "",

		eusdAAVEAPY: "",
		eusdAAVEEli: "",
		eusdAAVEPen: "",

		eusdCOMPAPY: "",
		eusdCOMPEli: "",
		eusdCOMPPen: "",

		eusdWBTCAPY: "",
		eusdWBTCEli: "",
		eusdWBTCPen: "",

		eusdWETHAPY: "",
		eusdWETHEli: "",
		eusdWETHPen: "",

		eusdOHMAPY: "",
		eusdOHMEli: "",
		eusdOHMPen: "",

		eusdCVXAPY: "",
		eusdCVXEli: "",
		eusdCVXPen: "",

		msdogeWETHAPY: "",
		msdogeWETHEli: "",
		msdogeWETHPen: "",

		msdogeDAIAPY: "",
		msdogeDAIEli: "",
		msdogeDAIPen: "",

		msdogeUSDCAPY: "",
		msdogeUSDCEli: "",
		msdogeUSDCPen: "",

		msdogeFRAXAPY: "",
		msdogeFRAXEli: "",
		msdogeFRAXPen: "",

		msdogeSHIBAPY: "",
		msdogeSHIBEli: "",
		msdogeSHIBPen: "",

		msdogeCVXAPY: "",
		msdogeCVXEli: "",
		msdogeCVXPen: "",

		cryptoAAVEAPY: "",
		cryptoAAVEEli: "",
		cryptoAAVEPen: "",

		cryptoUSDTAPY: "",
		cryptoUSDTEli: "",
		cryptoUSDTPen: "",

		cryptoTUSDAPY: "",
		cryptoTUSDEli: "",
		cryptoTUSDPen: "",

		cryptoETHAPY: "",
		cryptoETHEli: "",
		cryptoETHPen: "",

		cryptoGUSDAPY: "",
		cryptoGUSDEli: "",
		cryptoGUSDPen: "",

		cryptoPAXAPY: "",
		cryptoPAXEli: "",
		cryptoPAXPen: "",
	});
	const [DogeAPY, setDogeAPY] = useState("");
	const [DogeEli, setDogeEli] = useState("");
	const [DogePen, setDogePenalty] = useState("");

	const [LoriaAPY, setLoriaAPY] = useState("");
	const [LoriaEli, setLoriaEli] = useState("");
	const [LoriaPen, setLoriaPenalty] = useState("");

	const [ParaDAIAPY, setParaDAIAPY] = useState("");
	const [ParaDAIEli, setParaDAIEli] = useState("");
	const [ParaDAIPen, setParaDAIPen] = useState("");

	const [ParaUSDTAPY, setParaUSDTAPY] = useState("");
	const [ParaUSDTEli, setParaUSDTEli] = useState("");
	const [ParaUSDTPen, setParaUSDTPen] = useState("");

	const [ParaUSDCAPY, setParaUSDCAPY] = useState("");
	const [ParaUSDCEli, setParaUSDCEli] = useState("");
	const [ParaUSDCPen, setParaUSDCPen] = useState("");

	const [ParaPAXAPY, setParaPAXAPY] = useState("");
	const [ParaPAXEli, setParaPAXEli] = useState("");
	const [ParaPAXPen, setParaPAXPen] = useState("");

	const [ParaTUSDAPY, setParaTUSDAPY] = useState("");
	const [ParaTUSDEli, setParaTUSDEli] = useState("");
	const [ParaTUSDPen, setParaTUSDPen] = useState("");

	const [ParaUSDPAPY, setParaUSDPAPY] = useState("");
	const [ParaUSDPEli, setParaUSDPEli] = useState("");
	const [ParaUSDPPen, setParaUSDPPen] = useState("");

	const [AlphaELONAPY, setAlphaELONAPY] = useState("");
	const [AlphaELONEli, setAlphaELONEli] = useState("");
	const [AlphaELONPen, setAlphaELONPen] = useState("");

	const [AlphaSHIBAPY, setAlphaSHIBAPY] = useState("");
	const [AlphaSHIBEli, setAlphaSHIBEli] = useState("");
	const [AlphaSHIBPen, setAlphaSHIBPen] = useState("");

	const [AlphaMSDOGEAPY, setAlphaMSDOGEAPY] = useState("");
	const [AlphaMSDOGEEli, setAlphaMSDOGEEli] = useState("");
	const [AlphaMSDOGEPen, setAlphaMSDOGEPen] = useState("");

	const [AlphaHOGEAPY, setAlphaHOGEAPY] = useState("");
	const [AlphaHOGEEli, setAlphaHOGEEli] = useState("");
	const [AlphaHOGEPen, setAlphaHOGEPen] = useState("");

	const [AlphaSMIAPY, setAlphaSMIAPY] = useState("");
	const [AlphaSMIEli, setAlphaSMIEli] = useState("");
	const [AlphaSMIPen, setAlphaSMIPen] = useState("");

	const [AlphaSUSHIAPY, setAlphaSUSHIAPY] = useState("");
	const [AlphaSUSHIEli, setAlphaSUSHIEli] = useState("");
	const [AlphaSUSHIPen, setAlphaSUSHIPen] = useState("");

	const [OmegaCRVAPY, setOmegaCRVAPY] = useState("");
	const [OmegaCRVEli, setOmegaCRVEli] = useState("");
	const [OmegaCRVPen, setOmegaCRVPen] = useState("");

	const [OmegaKNCAPY, setOmegaKNCAPY] = useState("");
	const [OmegaKNCEli, setOmegaKNCEli] = useState("");
	const [OmegaKNCPen, setOmegaKNCPen] = useState("");

	const [OmegaZRXAPY, setOmegaZRXAPY] = useState("");
	const [OmegaZRXEli, setOmegaZRXEli] = useState("");
	const [OmegaZRXPen, setOmegaZRXPen] = useState("");

	const [OmegaBNTAPY, setOmegaBNTAPY] = useState("");
	const [OmegaBNTEli, setOmegaBNTEli] = useState("");
	const [OmegaBNTPen, setOmegaBNTPen] = useState("");

	const [OmegaUNIAPY, setOmegaUNIAPY] = useState("");
	const [OmegaUNIEli, setOmegaUNIEli] = useState("");
	const [OmegaUNIPen, setOmegaUNIPen] = useState("");

	const [OmegaMKRAPY, setOmegaMKRAPY] = useState("");
	const [OmegaMKREli, setOmegaMKREli] = useState("");
	const [OmegaMKRPen, setOmegaMKRPen] = useState("");

	const [eUSDAAVEAPY, seteUSDAAVEAPY] = useState("");
	const [eUSDAAVEEli, seteUSDAAVEEli] = useState("");
	const [eUSDAAVEPen, seteUSDAAVEPen] = useState("");

	const [eUSDCOMPAPY, seteUSDCOMPAPY] = useState("");
	const [eUSDCOMPEli, seteUSDCOMPEli] = useState("");
	const [eUSDCOMPPen, seteUSDCOMPPen] = useState("");

	const [eUSDWBTCAPY, seteUSDWBTCAPY] = useState("");
	const [eUSDWBTCEli, seteUSDWBTCEli] = useState("");
	const [eUSDWBTCPen, seteUSDWBTCPen] = useState("");

	const [eUSDWETHAPY, seteUSDWETHAPY] = useState("");
	const [eUSDWETHEli, seteUSDWETHEli] = useState("");
	const [eUSDWETHPen, seteUSDWETHPen] = useState("");

	const [eUSDOHMAPY, seteUSDOHMAPY] = useState("");
	const [eUSDOHMEli, seteUSDOHMEli] = useState("");
	const [eUSDOHMPen, seteUSDOHMPen] = useState("");

	const [eUSDCVXAPY, seteUSDCVXAPY] = useState("");
	const [eUSDCVXEli, seteUSDCVXEli] = useState("");
	const [eUSDCVXPen, seteUSDCVXPen] = useState("");

	const [MSDogeWETHAPY, setMSDogeWETHAPY] = useState("");
	const [MSDogeWETHEli, setMSDogeWETHEli] = useState("");
	const [MSDogeWETHPen, setMSDogeWETHPen] = useState("");

	const [MSDogeDAIAPY, setMSDogeDAIAPY] = useState("");
	const [MSDogeDAIEli, setMSDogeDAIEli] = useState("");
	const [MSDogeDAIPen, setMSDogeDAIPen] = useState("");

	const [MSDogeUSDCAPY, setMSDogeUSDCAPY] = useState("");
	const [MSDogeUSDCEli, setMSDogeUSDCEli] = useState("");
	const [MSDogeUSDCPen, setMSDogeUSDCPen] = useState("");

	const [MSDogeFRAXAPY, setMSDogeFRAXAPY] = useState("");
	const [MSDogeFRAXEli, setMSDogeFRAXEli] = useState("");
	const [MSDogeFRAXPen, setMSDogeFRAXPen] = useState("");

	const [MSDogeSHIBAPY, setMSDogeSHIBAPY] = useState("");
	const [MSDogeSHIBEli, setMSDogeSHIBEli] = useState("");
	const [MSDogeSHIBPen, setMSDogeSHIBPen] = useState("");

	const [MSDogeCVXAPY, setMSDogeCVXAPY] = useState("");
	const [MSDogeCVXEli, setMSDogeCVXEli] = useState("");
	const [MSDogeCVXPen, setMSDogeCVXPen] = useState("");

	const [CryptoAAVEAPY, setCryptoAAVEAPY] = useState("");
	const [CryptoAAVEEli, setCryptoAAVEEli] = useState("");
	const [CryptoAAVEPen, setCryptoAAVEPen] = useState("");

	const [CryptoUSDTAPY, setCryptoUSDTAPY] = useState("");
	const [CryptoUSDTEli, setCryptoUSDTEli] = useState("");
	const [CryptoUSDTPen, setCryptoUSDTPen] = useState("");

	const [CryptoTUSDAPY, setCryptoTUSDAPY] = useState("");
	const [CryptoTUSDEli, setCryptoTUSDEli] = useState("");
	const [CryptoTUSDPen, setCryptoTUSDPen] = useState("");

	const [CryptoETHAPY, setCryptoETHAPY] = useState("");
	const [CryptoETHEli, setCryptoETHEli] = useState("");
	const [CryptoETHPen, setCryptoETHPen] = useState("");

	const [CryptoGUSDAPY, setCryptoGUSDAPY] = useState("");
	const [CryptoGUSDEli, setCryptoGUSDEli] = useState("");
	const [CryptoGUSDPen, setCryptoGUSDPen] = useState("");

	const [CryptoPAXAPY, setCryptoPAXAPY] = useState("");
	const [CryptoPAXEli, setCryptoPAXEli] = useState("");
	const [CryptoPAXPen, setCryptoPAXPen] = useState("");

	const [activeItem, setActiveItem] = useState(-1);
	const [isLoading, setIsLoading] = useState(false);
	const [dogeClaimList, setDogeCliamList] = useState([]);
	const [cryptoClaimList, setCryptoCliamList] = useState([]);

	useEffect(() => {
		const connectWeb3 = async () => {
			const _web3 = await getWeb3();
			const _Staking = new _web3.eth.Contract(StakingABI, StakingAddress);
			setWeb3(_web3);
			setStaking(_Staking);
		};

		connectWeb3();
	}, []);

	useEffect(() => {
		const setData = async () => {
			if (account && Staking && activeItem == -1) {
				const _dogeAPY = await Staking.methods.DogeAPY().call();
				const _dogeEli = await Staking.methods.DogeElig().call();
				const _dogePen = await Staking.methods.DogePenalty().call();
				const _loriaAPY = await Staking.methods.LoriaAPY().call();
				const _loriaEli = await Staking.methods.LoriaElig().call();
				const _loriaPen = await Staking.methods.LoriaPenalty().call();

				const _paraDAIAPY = await Staking.methods.ParaDAIAPY().call();
				const _paraDAIEli = await Staking.methods.ParaDAIElig().call();
				const _paraDAIPen = await Staking.methods.ParaDAIPen().call();

				const _paraUSDTAPY = await Staking.methods.ParaUSDTAPY().call();
				const _paraUSDTEli = await Staking.methods.ParaUSDTElig().call();
				const _paraUSDTPen = await Staking.methods.ParaUSDTPen().call();

				const _paraUSDCAPY = await Staking.methods.ParaUSDCAPY().call();
				const _paraUSDCEli = await Staking.methods.ParaUSDCElig().call();
				const _paraUSDCPen = await Staking.methods.ParaUSDCPen().call();

				const _paraPAXAPY = await Staking.methods.ParaPAXAPY().call();
				const _paraPAXEli = await Staking.methods.ParaPAXElig().call();
				const _paraPAXPen = await Staking.methods.ParaPAXPen().call();

				const _paraTUSDAPY = await Staking.methods.ParaTUSDAPY().call();
				const _paraTUSDEli = await Staking.methods.ParaTUSDElig().call();
				const _paraTUSDPen = await Staking.methods.ParaTUSDPen().call();

				const _paraUSDPAPY = await Staking.methods.ParaUSDPAPY().call();
				const _paraUSDPEli = await Staking.methods.ParaUSDPElig().call();
				const _paraUSDPPen = await Staking.methods.ParaUSDPPen().call();

				const _alphaELONAPY = await Staking.methods.AlphaELONAPY().call();
				const _alphaELONEli = await Staking.methods.AlphaELONElig().call();
				const _alphaELONPen = await Staking.methods.AlphaELONPen().call();

				const _alphaSHIBAPY = await Staking.methods.AlphaSHIBAPY().call();
				const _alphaSHIBEli = await Staking.methods.AlphaSHIBElig().call();
				const _alphaSHIBPen = await Staking.methods.AlphaSHIBPen().call();

				const _alphaMSDOGEAPY = await Staking.methods.AlphaMSDOGEAPY().call();
				const _alphaMSDOGEEli = await Staking.methods.AlphaMSDOGEElig().call();
				const _alphaMSDOGEPen = await Staking.methods.AlphaMSDOGEPen().call();

				const _alphaHOGEAPY = await Staking.methods.AlphaHOGEAPY().call();
				const _alphaHOGEEli = await Staking.methods.AlphaHOGEElig().call();
				const _alphaHOGEPen = await Staking.methods.AlphaHOGEPen().call();

				const _alphaSMIAPY = await Staking.methods.AlphaSMIAPY().call();
				const _alphaSMIEli = await Staking.methods.AlphaSMIElig().call();
				const _alphaSMIPen = await Staking.methods.AlphaSMIPen().call();

				const _alphaSUSHIAPY = await Staking.methods.AlphaSUSHIAPY().call();
				const _alphaSUSHIEli = await Staking.methods.AlphaSUSHIElig().call();
				const _alphaSUSHIPen = await Staking.methods.AlphaSUSHIPen().call();

				const _omegaCRVAPY = await Staking.methods.OmegaCRVAPY().call();
				const _omegaCRVEli = await Staking.methods.OmegaCRVElig().call();
				const _omegaCRVPen = await Staking.methods.OmegaCRVPen().call();

				const _omegaKNCAPY = await Staking.methods.OmegaKNCAPY().call();
				const _omegaKNCEli = await Staking.methods.OmegaKNCElig().call();
				const _omegaKNCPen = await Staking.methods.OmegaKNCPen().call();

				const _omegaZRXAPY = await Staking.methods.OmegaZRXAPY().call();
				const _omegaZRXEli = await Staking.methods.OmegaZRXElig().call();
				const _omegaZRXPen = await Staking.methods.OmegaZRXPen().call();

				const _omegaBNTAPY = await Staking.methods.OmegaBNTAPY().call();
				const _omegaBNTEli = await Staking.methods.OmegaBNTElig().call();
				const _omegaBNTPen = await Staking.methods.OmegaBNTPen().call();

				const _omegaUNIAPY = await Staking.methods.OmegaUNIAPY().call();
				const _omegaUNIEli = await Staking.methods.OmegaUNIElig().call();
				const _omegaUNIPen = await Staking.methods.OmegaUNIPen().call();

				const _omegaMKRAPY = await Staking.methods.OmegaMKRAPY().call();
				const _omegaMKREli = await Staking.methods.OmegaMKRElig().call();
				const _omegaMKRPen = await Staking.methods.OmegaMKRPen().call();

				const _eusdAAVEAPY = await Staking.methods.eUSDAAVEAPY().call();
				const _eusdAAVEEli = await Staking.methods.eUSDAAVEElig().call();
				const _eusdAAVEPen = await Staking.methods.eUSDAAVEPen().call();

				const _eusdCOMPAPY = await Staking.methods.eUSDCOMPAPY().call();
				const _eusdCOMPEli = await Staking.methods.eUSDCOMPElig().call();
				const _eusdCOMPPen = await Staking.methods.eUSDCOMPPen().call();

				const _eusdWBTCAPY = await Staking.methods.eUSDWBTCAPY().call();
				const _eusdWBTCEli = await Staking.methods.eUSDWBTCElig().call();
				const _eusdWBTCPen = await Staking.methods.eUSDWBTCPen().call();

				const _eusdWETHAPY = await Staking.methods.eUSDWETHAPY().call();
				const _eusdWETHEli = await Staking.methods.eUSDWETHElig().call();
				const _eusdWETHPen = await Staking.methods.eUSDWETHPen().call();

				const _eusdOHMAPY = await Staking.methods.eUSDOHMAPY().call();
				const _eusdOHMEli = await Staking.methods.eUSDOHMElig().call();
				const _eusdOHMPen = await Staking.methods.eUSDOHMPen().call();

				const _eusdCVXAPY = await Staking.methods.eUSDCVXAPY().call();
				const _eusdCVXEli = await Staking.methods.eUSDCVXElig().call();
				const _eusdCVXPen = await Staking.methods.eUSDCVXPen().call();

				const _msdogeWETHAPY = await Staking.methods.MSDogeWETHAPY().call();
				const _msdogeWETHEli = await Staking.methods.MSDogeWETHElig().call();
				const _msdogeWETHPen = await Staking.methods.MSDogeWETHPen().call();

				const _msdogeDAIAPY = await Staking.methods.MSDogeDAIAPY().call();
				const _msdogeDAIEli = await Staking.methods.MSDogeDAIElig().call();
				const _msdogeDAIPen = await Staking.methods.MSDogeDAIPen().call();

				const _msdogeUSDCAPY = await Staking.methods.MSDogeUSDCAPY().call();
				const _msdogeUSDCEli = await Staking.methods.MSDogeUSDCElig().call();
				const _msdogeUSDCPen = await Staking.methods.MSDogeUSDCPen().call();

				const _msdogeFRAXAPY = await Staking.methods.MSDogeFRAXAPY().call();
				const _msdogeFRAXEli = await Staking.methods.MSDogeFRAXElig().call();
				const _msdogeFRAXPen = await Staking.methods.MSDogeFRAXPen().call();

				const _msdogeSHIBAPY = await Staking.methods.MSDogeSHIBAPY().call();
				const _msdogeSHIBEli = await Staking.methods.MSDogeSHIBElig().call();
				const _msdogeSHIBPen = await Staking.methods.MSDogeSHIBPen().call();

				const _msdogeCVXAPY = await Staking.methods.MSDogeCVXAPY().call();
				const _msdogeCVXEli = await Staking.methods.MSDogeCVXElig().call();
				const _msdogeCVXPen = await Staking.methods.MSDogeCVXPen().call();

				const _cryptoAAVEAPY = await Staking.methods.CryptoAAVEAPY().call();
				const _cryptoAAVEEli = await Staking.methods.CryptoAAVEElig().call();
				const _cryptoAAVEPen = await Staking.methods.CryptoAAVEPen().call();

				const _cryptoUSDTAPY = await Staking.methods.CryptoUSDTAPY().call();
				const _cryptoUSDTEli = await Staking.methods.CryptoUSDTElig().call();
				const _cryptoUSDTPen = await Staking.methods.CryptoUSDTPen().call();

				const _cryptoTUSDAPY = await Staking.methods.CryptoTUSDAPY().call();
				const _cryptoTUSDEli = await Staking.methods.CryptoTUSDElig().call();
				const _cryptoTUSDPen = await Staking.methods.CryptoTUSDPen().call();

				const _cryptoETHAPY = await Staking.methods.CryptoETHAPY().call();
				const _cryptoETHEli = await Staking.methods.CryptoETHElig().call();
				const _cryptoETHPen = await Staking.methods.CryptoETHPen().call();

				const _cryptoGUSDAPY = await Staking.methods.CryptoGUSDAPY().call();
				const _cryptoGUSDEli = await Staking.methods.CryptoGUSDElig().call();
				const _cryptoGUSDPen = await Staking.methods.CryptoGUSDPen().call();

				const _cryptoPAXAPY = await Staking.methods.CryptoPAXAPY().call();
				const _cryptoPAXEli = await Staking.methods.CryptoPAXElig().call();
				const _cryptoPAXPen = await Staking.methods.CryptoPAXPen().call();

				setInitData({
					...initData,
					dogeAPY: _dogeAPY,
					dogeEli: _dogeEli,
					dogePen: _dogePen,

					loriaEli: _loriaEli,
					loriaAPY: _loriaAPY,
					loriaPen: _loriaPen,

					paraDAIAPY: _paraDAIAPY,
					paraDAIEli: _paraDAIEli,
					paraDAIPen: _paraDAIPen,

					paraUSDTAPY: _paraUSDTAPY,
					paraUSDTEli: _paraUSDTEli,
					paraUSDTPen: _paraUSDTPen,

					paraUSDCAPY: _paraUSDCAPY,
					paraUSDCEli: _paraUSDCEli,
					paraUSDCPen: _paraUSDCPen,

					paraPAXAPY: _paraPAXAPY,
					paraPAXEli: _paraPAXEli,
					paraPAXPen: _paraPAXPen,

					paraTUSDAPY: _paraTUSDAPY,
					paraTUSDEli: _paraTUSDEli,
					paraTUSDPen: _paraTUSDPen,

					paraUSDPAPY: _paraUSDPAPY,
					paraUSDPEli: _paraUSDPEli,
					paraUSDPPen: _paraUSDPPen,

					alphaELONAPY: _alphaELONAPY,
					alphaELONEli: _alphaELONEli,
					alphaELONPen: _alphaELONPen,

					alphaSHIBAPY: _alphaSHIBAPY,
					alphaSHIBEli: _alphaSHIBEli,
					alphaSHIBPen: _alphaSHIBPen,

					alphaMSDOGEAPY: _alphaMSDOGEAPY,
					alphaMSDOGEEli: _alphaMSDOGEEli,
					alphaMSDOGEPen: _alphaMSDOGEPen,

					alphaHOGEAPY: _alphaHOGEAPY,
					alphaHOGEEli: _alphaHOGEEli,
					alphaHOGEPen: _alphaHOGEPen,

					alphaSMIAPY: _alphaSMIAPY,
					alphaSMIEli: _alphaSMIEli,
					alphaSMIPen: _alphaSMIPen,

					alphaSUSHIAPY: _alphaSUSHIAPY,
					alphaSUSHIEli: _alphaSUSHIEli,
					alphaSUSHIPen: _alphaSUSHIPen,

					omegaCRVAPY: _omegaCRVAPY,
					omegaCRVEli: _omegaCRVEli,
					omegaCRVPen: _omegaCRVPen,

					omegaKNCAPY: _omegaKNCAPY,
					omegaKNCEli: _omegaKNCEli,
					omegaKNCPen: _omegaKNCPen,

					omegaZRXAPY: _omegaZRXAPY,
					omegaZRXEli: _omegaZRXEli,
					omegaZRXPen: _omegaZRXPen,

					omegaBNTAPY: _omegaBNTAPY,
					omegaBNTEli: _omegaBNTEli,
					omegaBNTPen: _omegaBNTPen,

					omegaUNIAPY: _omegaUNIAPY,
					omegaUNIEli: _omegaUNIEli,
					omegaUNIPen: _omegaUNIPen,

					omegaMKRAPY: _omegaMKRAPY,
					omegaMKREli: _omegaMKREli,
					omegaMKRPen: _omegaMKRPen,

					eusdAAVEAPY: _eusdAAVEAPY,
					eusdAAVEEli: _eusdAAVEEli,
					eusdAAVEPen: _eusdAAVEPen,

					eusdCOMPAPY: _eusdCOMPAPY,
					eusdCOMPEli: _eusdCOMPEli,
					eusdCOMPPen: _eusdCOMPPen,

					eusdWBTCAPY: _eusdWBTCAPY,
					eusdWBTCEli: _eusdWBTCEli,
					eusdWBTCPen: _eusdWBTCPen,

					eusdWETHAPY: _eusdWETHAPY,
					eusdWETHEli: _eusdWETHEli,
					eusdWETHPen: _eusdWETHPen,

					eusdOHMAPY: _eusdOHMAPY,
					eusdOHMEli: _eusdOHMEli,
					eusdOHMPen: _eusdOHMPen,

					eusdCVXAPY: _eusdCVXAPY,
					eusdCVXEli: _eusdCVXEli,
					eusdCVXPen: _eusdCVXPen,

					msdogeWETHAPY: _msdogeWETHAPY,
					msdogeWETHEli: _msdogeWETHEli,
					msdogeWETHPen: _msdogeWETHPen,

					msdogeDAIAPY: _msdogeDAIAPY,
					msdogeDAIEli: _msdogeDAIEli,
					msdogeDAIPen: _msdogeDAIPen,

					msdogeUSDCAPY: _msdogeUSDCAPY,
					msdogeUSDCEli: _msdogeUSDCEli,
					msdogeUSDCPen: _msdogeUSDCPen,

					msdogeFRAXAPY: _msdogeFRAXAPY,
					msdogeFRAXEli: _msdogeFRAXEli,
					msdogeFRAXPen: _msdogeFRAXPen,

					msdogeSHIBAPY: _msdogeSHIBAPY,
					msdogeSHIBEli: _msdogeSHIBEli,
					msdogeSHIBPen: _msdogeSHIBPen,

					msdogeCVXAPY: _msdogeCVXAPY,
					msdogeCVXEli: _msdogeCVXEli,
					msdogeCVXPen: _msdogeCVXPen,

					cryptoAAVEAPY: _cryptoAAVEAPY,
					cryptoAAVEEli: _cryptoAAVEEli,
					cryptoAAVEPen: _cryptoAAVEPen,

					cryptoUSDTAPY: _cryptoUSDTAPY,
					cryptoUSDTEli: _cryptoUSDTEli,
					cryptoUSDTPen: _cryptoUSDTPen,

					cryptoTUSDAPY: _cryptoTUSDAPY,
					cryptoTUSDEli: _cryptoTUSDEli,
					cryptoTUSDPen: _cryptoTUSDPen,

					cryptoETHAPY: _cryptoETHAPY,
					cryptoETHEli: _cryptoETHEli,
					cryptoETHPen: _cryptoETHPen,

					cryptoGUSDAPY: _cryptoGUSDAPY,
					cryptoGUSDEli: _cryptoGUSDEli,
					cryptoGUSDPen: _cryptoGUSDPen,

					cryptoPAXAPY: _cryptoPAXAPY,
					cryptoPAXEli: _cryptoPAXEli,
					cryptoPAXPen: _cryptoPAXPen,
				});

				setDogeAPY(_dogeAPY);
				setDogeEli(_dogeEli);
				setDogePenalty(_dogePen);

				setLoriaAPY(_loriaAPY);
				setLoriaEli(_loriaEli);
				setLoriaPenalty(_loriaPen);

				setParaDAIAPY(_paraDAIAPY);
				setParaDAIEli(_paraDAIEli);
				setParaDAIPen(_paraDAIPen);

				setParaUSDTAPY(_paraUSDTAPY);
				setParaUSDTEli(_paraUSDTEli);
				setParaUSDTPen(_paraUSDTPen);

				setParaUSDCAPY(_paraUSDCAPY);
				setParaUSDCEli(_paraUSDCEli);
				setParaUSDCPen(_paraUSDCPen);

				setParaPAXAPY(_paraPAXAPY);
				setParaPAXEli(_paraPAXEli);
				setParaPAXPen(_paraPAXPen);

				setParaTUSDAPY(_paraTUSDAPY);
				setParaTUSDEli(_paraTUSDEli);
				setParaTUSDPen(_paraTUSDPen);

				setParaUSDPAPY(_paraUSDPAPY);
				setParaUSDPEli(_paraUSDPEli);
				setParaUSDPPen(_paraUSDPPen);

				setAlphaELONAPY(_alphaELONAPY);
				setAlphaELONEli(_alphaELONEli);
				setAlphaELONPen(_alphaELONPen);

				setAlphaSHIBAPY(_alphaSHIBAPY);
				setAlphaSHIBEli(_alphaSHIBEli);
				setAlphaSHIBPen(_alphaSHIBPen);

				setAlphaMSDOGEAPY(_alphaMSDOGEAPY);
				setAlphaMSDOGEEli(_alphaMSDOGEEli);
				setAlphaMSDOGEPen(_alphaMSDOGEPen);

				setAlphaHOGEAPY(_alphaHOGEAPY);
				setAlphaHOGEEli(_alphaHOGEEli);
				setAlphaHOGEPen(_alphaHOGEPen);

				setAlphaSMIAPY(_alphaSMIAPY);
				setAlphaSMIEli(_alphaSMIEli);
				setAlphaSMIPen(_alphaSMIPen);

				setAlphaSUSHIAPY(_alphaSUSHIAPY);
				setAlphaSUSHIEli(_alphaSUSHIEli);
				setAlphaSUSHIPen(_alphaSUSHIPen);

				setOmegaCRVAPY(_omegaCRVAPY);
				setOmegaCRVEli(_omegaCRVEli);
				setOmegaCRVPen(_omegaCRVPen);

				setOmegaKNCAPY(_omegaKNCAPY);
				setOmegaKNCEli(_omegaKNCEli);
				setOmegaKNCPen(_omegaKNCPen);

				setOmegaZRXAPY(_omegaZRXAPY);
				setOmegaZRXEli(_omegaZRXEli);
				setOmegaZRXPen(_omegaZRXPen);

				setOmegaBNTAPY(_omegaBNTAPY);
				setOmegaBNTEli(_omegaBNTEli);
				setOmegaBNTPen(_omegaBNTPen);

				setOmegaUNIAPY(_omegaUNIAPY);
				setOmegaUNIEli(_omegaUNIEli);
				setOmegaUNIPen(_omegaUNIPen);

				setOmegaMKRAPY(_omegaMKRAPY);
				setOmegaMKREli(_omegaMKREli);
				setOmegaMKRPen(_omegaMKRPen);

				seteUSDAAVEAPY(_eusdAAVEAPY);
				seteUSDAAVEEli(_eusdAAVEEli);
				seteUSDAAVEPen(_eusdAAVEPen);

				seteUSDCOMPAPY(_eusdCOMPAPY);
				seteUSDCOMPEli(_eusdCOMPEli);
				seteUSDCOMPPen(_eusdCOMPPen);

				seteUSDWBTCAPY(_eusdWBTCAPY);
				seteUSDWBTCEli(_eusdWBTCEli);
				seteUSDWBTCPen(_eusdWBTCPen);

				seteUSDWETHAPY(_eusdWETHAPY);
				seteUSDWETHEli(_eusdWETHEli);
				seteUSDWETHPen(_eusdWETHPen);

				seteUSDOHMAPY(_eusdOHMAPY);
				seteUSDOHMEli(_eusdOHMEli);
				seteUSDOHMPen(_eusdOHMPen);

				seteUSDCVXAPY(_eusdCVXAPY);
				seteUSDCVXEli(_eusdCVXEli);
				seteUSDCVXPen(_eusdCVXPen);

				setMSDogeWETHAPY(_msdogeWETHAPY);
				setMSDogeWETHEli(_msdogeWETHEli);
				setMSDogeWETHPen(_msdogeWETHPen);

				setMSDogeDAIAPY(_msdogeDAIAPY);
				setMSDogeDAIEli(_msdogeDAIEli);
				setMSDogeDAIPen(_msdogeDAIPen);

				setMSDogeUSDCAPY(_msdogeUSDCAPY);
				setMSDogeUSDCEli(_msdogeUSDCEli);
				setMSDogeUSDCPen(_msdogeUSDCPen);

				setMSDogeFRAXAPY(_msdogeFRAXAPY);
				setMSDogeFRAXEli(_msdogeFRAXEli);
				setMSDogeFRAXPen(_msdogeFRAXPen);

				setMSDogeSHIBAPY(_msdogeSHIBAPY);
				setMSDogeSHIBEli(_msdogeSHIBEli);
				setMSDogeSHIBPen(_msdogeSHIBPen);

				setMSDogeCVXAPY(_msdogeCVXAPY);
				setMSDogeCVXEli(_msdogeCVXEli);
				setMSDogeCVXPen(_msdogeCVXPen);

				setCryptoAAVEAPY(_cryptoAAVEAPY);
				setCryptoAAVEEli(_cryptoAAVEEli);
				setCryptoAAVEPen(_cryptoAAVEPen);

				setCryptoUSDTAPY(_cryptoUSDTAPY);
				setCryptoUSDTEli(_cryptoUSDTEli);
				setCryptoUSDTPen(_cryptoUSDTPen);

				setCryptoTUSDAPY(_cryptoTUSDAPY);
				setCryptoTUSDEli(_cryptoTUSDEli);
				setCryptoTUSDPen(_cryptoTUSDPen);

				setCryptoETHAPY(_cryptoETHAPY);
				setCryptoETHEli(_cryptoETHEli);
				setCryptoETHPen(_cryptoETHPen);

				setCryptoGUSDAPY(_cryptoGUSDAPY);
				setCryptoGUSDEli(_cryptoGUSDEli);
				setCryptoGUSDPen(_cryptoGUSDPen);

				setCryptoPAXAPY(_cryptoPAXAPY);
				setCryptoPAXEli(_cryptoPAXEli);
				setCryptoPAXPen(_cryptoPAXPen);
			}
		};

		setData();
	}, [account, activeItem]);

	const importAirDropList = (e, type) => {
		if (!account) {
			NotificationManager.warning("Metamask is not connected!", "Warning");
			return;
		}
		const file = e.target.files[0];

		if (file) {
			const reader = new FileReader();
			reader.onloadend = function (e) {
				const text = e.target.result;
				processCSV(text, type);
			};

			reader.readAsText(file);
		} else {
			switch (type) {
				case 0:
					setDogeCliamList([]);
					break;
				case 1:
					setCryptoCliamList([]);
					break;
				default:
					break;
			}
		}
	};

	const processCSV = (str, type) => {
		const rows = str.slice(str.indexOf("\n") + 1, str.length - 1).split("\n");
		const newArray = rows.map((row) => {
			row = row.slice(0, row.indexOf("\r"));
			const values = row.split(",");
			return {
				staker: values[0],
				balance: web3.utils.toWei(values[1], "ether"),
			};
		});

		switch (type) {
			case 0:
				setDogeCliamList(newArray);
				break;
			case 1:
				setCryptoCliamList(newArray);
				break;
			default:
				break;
		}
	};

	const changeItem = async () => {
		try {
			setIsLoading(true);
			switch (activeItem.toString()) {
				case "paraDAIAPY":
					await Staking.methods
						.setParaDAIAPY(ParaDAIAPY)
						.send({ from: account });
					NotificationManager.success(":D", "Success");
					break;
				case "paraDAIEli":
					await Staking.methods
						.setParaDAIEli(ParaDAIEli)
						.send({ from: account });
					NotificationManager.success(":D", "Success");
					break;
				case "paraDAIPen":
					await Staking.methods
						.setParaDAIPen(ParaDAIPen)
						.send({ from: account });
					NotificationManager.success(":D", "Success");
					break;

				case "paraUSDTAPY":
					await Staking.methods
						.setParaUSDTAPY(ParaUSDTAPY)
						.send({ from: account });
					NotificationManager.success(":D", "Success");
					break;
				case "paraUSDTEli":
					await Staking.methods
						.setParaUSDTEli(ParaUSDTEli)
						.send({ from: account });
					NotificationManager.success(":D", "Success");
					break;
				case "paraUSDTPen":
					await Staking.methods
						.setParaUSDTPen(ParaUSDTPen)
						.send({ from: account });
					NotificationManager.success(":D", "Success");
					break;

				case "paraUSDCAPY":
					await Staking.methods
						.setParaUSDCAPY(ParaUSDCAPY)
						.send({ from: account });
					NotificationManager.success(":D", "Success");
					break;
				case "paraUSDCEli":
					await Staking.methods
						.setParaUSDCEli(ParaUSDCEli)
						.send({ from: account });
					NotificationManager.success(":D", "Success");
					break;
				case "paraUSDCPen":
					await Staking.methods
						.setParaUSDCPen(ParaUSDCPen)
						.send({ from: account });
					NotificationManager.success(":D", "Success");
					break;

				case "paraPAXAPY":
					await Staking.methods
						.setParaPAXAPY(ParaPAXAPY)
						.send({ from: account });
					NotificationManager.success(":D", "Success");
					break;
				case "paraPAXEli":
					await Staking.methods
						.setParaPAXEli(ParaPAXEli)
						.send({ from: account });
					NotificationManager.success(":D", "Success");
					break;
				case "paraPAXPen":
					await Staking.methods
						.setParaPAXPen(ParaPAXPen)
						.send({ from: account });
					NotificationManager.success(":D", "Success");
					break;

				case "paraTUSDAPY":
					await Staking.methods
						.setParaTUSDAPY(ParaTUSDAPY)
						.send({ from: account });
					NotificationManager.success(":D", "Success");
					break;
				case "paraTUSDEli":
					await Staking.methods
						.setParaTUSDEli(ParaTUSDEli)
						.send({ from: account });
					NotificationManager.success(":D", "Success");
					break;
				case "paraTUSDPen":
					await Staking.methods
						.setParaTUSDPen(ParaTUSDPen)
						.send({ from: account });
					NotificationManager.success(":D", "Success");
					break;

				case "paraUSDPAPY":
					await Staking.methods
						.setParaUSDPAPY(ParaUSDPAPY)
						.send({ from: account });
					NotificationManager.success(":D", "Success");
					break;
				case "paraUSDPEli":
					await Staking.methods
						.setParaUSDPEli(ParaUSDPEli)
						.send({ from: account });
					NotificationManager.success(":D", "Success");
					break;
				case "paraUSDPPen":
					await Staking.methods
						.setParaUSDPPen(ParaUSDPPen)
						.send({ from: account });
					NotificationManager.success(":D", "Success");
					break;

				case "alphaELONAPY":
					await Staking.methods
						.setAlphaELONAPY(AlphaELONAPY)
						.send({ from: account });
					NotificationManager.success(":D", "Success");
					break;
				case "alphaELONEli":
					await Staking.methods
						.setAlphaELONEli(AlphaELONEli)
						.send({ from: account });
					NotificationManager.success(":D", "Success");
					break;
				case "alphaELONPen":
					await Staking.methods
						.setAlphaELONPen(AlphaELONPen)
						.send({ from: account });
					NotificationManager.success(":D", "Success");
					break;

				case "alphaSHIBAPY":
					await Staking.methods
						.setAlphaSHIBAPY(AlphaSHIBAPY)
						.send({ from: account });
					NotificationManager.success(":D", "Success");
					break;
				case "alphaSHIBEli":
					await Staking.methods
						.setAlphaSHIBEli(AlphaSHIBEli)
						.send({ from: account });
					NotificationManager.success(":D", "Success");
					break;
				case "alphaSHIBPen":
					await Staking.methods
						.setAlphaSHIBPen(AlphaSHIBPen)
						.send({ from: account });
					NotificationManager.success(":D", "Success");
					break;

				case "alphaMSDOGEAPY":
					await Staking.methods
						.setAlphaMSDOGEAPY(AlphaMSDOGEAPY)
						.send({ from: account });
					NotificationManager.success(":D", "Success");
					break;
				case "alphaMSDOGEEli":
					await Staking.methods
						.setAlphaMSDOGEEli(AlphaMSDOGEEli)
						.send({ from: account });
					NotificationManager.success(":D", "Success");
					break;
				case "alphaMSDOGEPen":
					await Staking.methods
						.setAlphaMSDOGEPen(AlphaMSDOGEPen)
						.send({ from: account });
					NotificationManager.success(":D", "Success");
					break;

				case "alphaHOGEAPY":
					await Staking.methods
						.setAlphaHOGEAPY(AlphaHOGEAPY)
						.send({ from: account });
					NotificationManager.success(":D", "Success");
					break;
				case "alphaHOGEEli":
					await Staking.methods
						.setAlphaHOGEEli(AlphaHOGEEli)
						.send({ from: account });
					NotificationManager.success(":D", "Success");
					break;
				case "alphaHOGEPen":
					await Staking.methods
						.setAlphaHOGEPen(AlphaHOGEPen)
						.send({ from: account });
					NotificationManager.success(":D", "Success");
					break;

				case "alphaSMIAPY":
					await Staking.methods
						.setAlphaSMIAPY(AlphaSMIAPY)
						.send({ from: account });
					NotificationManager.success(":D", "Success");
					break;
				case "alphaSMIEli":
					await Staking.methods
						.setAlphaSMIEli(AlphaSMIEli)
						.send({ from: account });
					NotificationManager.success(":D", "Success");
					break;
				case "alphaSMIPen":
					await Staking.methods
						.setAlphaSMIPen(AlphaSMIPen)
						.send({ from: account });
					NotificationManager.success(":D", "Success");
					break;

				case "alphaSUSHIAPY":
					await Staking.methods
						.setAlphaSUSHIAPY(AlphaSUSHIAPY)
						.send({ from: account });
					NotificationManager.success(":D", "Success");
					break;
				case "alphaSUSHIEli":
					await Staking.methods
						.setAlphaSUSHIEli(AlphaSUSHIEli)
						.send({ from: account });
					NotificationManager.success(":D", "Success");
					break;
				case "alphaSUSHIPen":
					await Staking.methods
						.setAlphaSUSHIPen(AlphaSUSHIPen)
						.send({ from: account });
					NotificationManager.success(":D", "Success");
					break;

				case "omegaCRVAPY":
					await Staking.methods
						.setOmegaCRVAPY(OmegaCRVAPY)
						.send({ from: account });
					NotificationManager.success(":D", "Success");
					break;
				case "omegaCRVEli":
					await Staking.methods
						.setOmegaCRVEli(OmegaCRVEli)
						.send({ from: account });
					NotificationManager.success(":D", "Success");
					break;
				case "omegaCRVPen":
					await Staking.methods
						.setOmegaCRVPen(OmegaCRVPen)
						.send({ from: account });
					NotificationManager.success(":D", "Success");
					break;

				case "omegaKNCAPY":
					await Staking.methods
						.setOmegaKNCAPY(OmegaKNCAPY)
						.send({ from: account });
					NotificationManager.success(":D", "Success");
					break;
				case "omegaKNCEli":
					await Staking.methods
						.setOmegaKNCEli(OmegaKNCEli)
						.send({ from: account });
					NotificationManager.success(":D", "Success");
					break;
				case "omegaKNCPen":
					await Staking.methods
						.setOmegaKNCPen(OmegaKNCPen)
						.send({ from: account });
					NotificationManager.success(":D", "Success");
					break;

				case "omegaZRXAPY":
					await Staking.methods
						.setOmegaZRXAPY(OmegaZRXAPY)
						.send({ from: account });
					NotificationManager.success(":D", "Success");
					break;
				case "omegaZRXEli":
					await Staking.methods
						.setOmegaZRXEli(OmegaZRXEli)
						.send({ from: account });
					NotificationManager.success(":D", "Success");
					break;
				case "omegaZRXPen":
					await Staking.methods
						.setOmegaZRXPen(OmegaZRXPen)
						.send({ from: account });
					NotificationManager.success(":D", "Success");
					break;

				case "omegaBNTAPY":
					await Staking.methods
						.setOmegaBNTAPY(OmegaBNTAPY)
						.send({ from: account });
					NotificationManager.success(":D", "Success");
					break;
				case "omegaBNTEli":
					await Staking.methods
						.setOmegaBNTEli(OmegaBNTEli)
						.send({ from: account });
					NotificationManager.success(":D", "Success");
					break;
				case "omegaBNTPen":
					await Staking.methods
						.setOmegaBNTPen(OmegaBNTPen)
						.send({ from: account });
					NotificationManager.success(":D", "Success");
					break;

				case "omegaUNIAPY":
					await Staking.methods
						.setOmegaUNIAPY(OmegaUNIAPY)
						.send({ from: account });
					NotificationManager.success(":D", "Success");
					break;
				case "omegaUNIEli":
					await Staking.methods
						.setOmegaUNIEli(OmegaUNIEli)
						.send({ from: account });
					NotificationManager.success(":D", "Success");
					break;
				case "omegaUNIPen":
					await Staking.methods
						.setOmegaUNIPen(OmegaUNIPen)
						.send({ from: account });
					NotificationManager.success(":D", "Success");
					break;

				case "omegaMKRAPY":
					await Staking.methods
						.setOmegaMKRAPY(OmegaMKRAPY)
						.send({ from: account });
					NotificationManager.success(":D", "Success");
					break;
				case "omegaMKREli":
					await Staking.methods
						.setOmegaMKREli(OmegaMKREli)
						.send({ from: account });
					NotificationManager.success(":D", "Success");
					break;
				case "omegaMKRPen":
					await Staking.methods
						.setOmegaMKRPen(OmegaMKRPen)
						.send({ from: account });
					NotificationManager.success(":D", "Success");
					break;

				case "eusdAAVEAPY":
					await Staking.methods
						.seteUSDAAVEAPY(eUSDAAVEAPY)
						.send({ from: account });
					NotificationManager.success(":D", "Success");
					break;
				case "eusdAAVEEli":
					await Staking.methods
						.seteUSDAAVEEli(eUSDAAVEEli)
						.send({ from: account });
					NotificationManager.success(":D", "Success");
					break;
				case "eusdAAVEPen":
					await Staking.methods
						.seteUSDAAVEPen(eUSDAAVEPen)
						.send({ from: account });
					NotificationManager.success(":D", "Success");
					break;

				case "eusdCOMPAPY":
					await Staking.methods
						.seteUSDCOMPAPY(eUSDCOMPAPY)
						.send({ from: account });
					NotificationManager.success(":D", "Success");
					break;
				case "eusdCOMPEli":
					await Staking.methods
						.seteUSDCOMPEli(eUSDCOMPEli)
						.send({ from: account });
					NotificationManager.success(":D", "Success");
					break;
				case "eusdCOMPPen":
					await Staking.methods
						.seteUSDCOMPPen(eUSDCOMPPen)
						.send({ from: account });
					NotificationManager.success(":D", "Success");
					break;

				case "eusdWBTCAPY":
					await Staking.methods
						.seteUSDWBTCAPY(eUSDWBTCAPY)
						.send({ from: account });
					NotificationManager.success(":D", "Success");
					break;
				case "eusdWBTCEli":
					await Staking.methods
						.seteUSDWBTCEli(eUSDWBTCEli)
						.send({ from: account });
					NotificationManager.success(":D", "Success");
					break;
				case "eusdWBTCPen":
					await Staking.methods
						.seteUSDWBTCPen(eUSDWBTCPen)
						.send({ from: account });
					NotificationManager.success(":D", "Success");
					break;

				case "eusdWETHAPY":
					await Staking.methods
						.seteUSDWETHAPY(eUSDWETHAPY)
						.send({ from: account });
					NotificationManager.success(":D", "Success");
					break;
				case "eusdWETHEli":
					await Staking.methods
						.seteUSDWETHEli(eUSDWETHEli)
						.send({ from: account });
					NotificationManager.success(":D", "Success");
					break;
				case "eusdWETHPen":
					await Staking.methods
						.seteUSDWETHPen(eUSDWETHPen)
						.send({ from: account });
					NotificationManager.success(":D", "Success");
					break;

				case "eusdOHMAPY":
					await Staking.methods
						.seteUSDOHMAPY(eUSDOHMAPY)
						.send({ from: account });
					NotificationManager.success(":D", "Success");
					break;
				case "eusdOHMEli":
					await Staking.methods
						.seteUSDOHMEli(eUSDOHMEli)
						.send({ from: account });
					NotificationManager.success(":D", "Success");
					break;
				case "eusdOHMPen":
					await Staking.methods
						.seteUSDOHMPen(eUSDOHMPen)
						.send({ from: account });
					NotificationManager.success(":D", "Success");
					break;

				case "eusdCVXAPY":
					await Staking.methods
						.seteUSDCVXAPY(eUSDCVXAPY)
						.send({ from: account });
					NotificationManager.success(":D", "Success");
					break;
				case "eusdCVXEli":
					await Staking.methods
						.seteUSDCVXEli(eUSDCVXEli)
						.send({ from: account });
					NotificationManager.success(":D", "Success");
					break;
				case "eusdCVXPen":
					await Staking.methods
						.seteUSDCVXPen(eUSDCVXPen)
						.send({ from: account });
					NotificationManager.success(":D", "Success");
					break;

				case "msdogeWETHAPY":
					await Staking.methods
						.setMSDogeWETHAPY(MSDogeWETHAPY)
						.send({ from: account });
					NotificationManager.success(":D", "Success");
					break;
				case "msdogeWETHEli":
					await Staking.methods
						.setMSDogeWETHEli(MSDogeWETHEli)
						.send({ from: account });
					NotificationManager.success(":D", "Success");
					break;
				case "msdogeWETHPen":
					await Staking.methods
						.setMSDogeWETHPen(MSDogeWETHPen)
						.send({ from: account });
					NotificationManager.success(":D", "Success");
					break;

				case "msdogeDAIAPY":
					await Staking.methods
						.setMSDogeDAIAPY(MSDogeDAIAPY)
						.send({ from: account });
					NotificationManager.success(":D", "Success");
					break;
				case "msdogeDAIEli":
					await Staking.methods
						.setMSDogeDAIEli(MSDogeDAIEli)
						.send({ from: account });
					NotificationManager.success(":D", "Success");
					break;
				case "msdogeDAIPen":
					await Staking.methods
						.setMSDogeDAIPen(MSDogeDAIPen)
						.send({ from: account });
					NotificationManager.success(":D", "Success");
					break;

				case "msdogeUSDCAPY":
					await Staking.methods
						.setMSDogeUSDCAPY(MSDogeUSDCAPY)
						.send({ from: account });
					NotificationManager.success(":D", "Success");
					break;
				case "msdogeUSDCEli":
					await Staking.methods
						.setMSDogeUSDCEli(MSDogeUSDCEli)
						.send({ from: account });
					NotificationManager.success(":D", "Success");
					break;
				case "msdogeUSDCPen":
					await Staking.methods
						.setMSDogeUSDCPen(MSDogeUSDCPen)
						.send({ from: account });
					NotificationManager.success(":D", "Success");
					break;

				case "msdogeFRAXAPY":
					await Staking.methods
						.setMSDogeFRAXAPY(MSDogeFRAXAPY)
						.send({ from: account });
					NotificationManager.success(":D", "Success");
					break;
				case "msdogeFRAXEli":
					await Staking.methods
						.setMSDogeFRAXEli(MSDogeFRAXEli)
						.send({ from: account });
					NotificationManager.success(":D", "Success");
					break;
				case "msdogeFRAXPen":
					await Staking.methods
						.setMSDogeFRAXPen(MSDogeFRAXPen)
						.send({ from: account });
					NotificationManager.success(":D", "Success");
					break;

				case "msdogeSHIBAPY":
					await Staking.methods
						.setMSDogeSHIBAPY(MSDogeSHIBAPY)
						.send({ from: account });
					NotificationManager.success(":D", "Success");
					break;
				case "msdogeSHIBEli":
					await Staking.methods
						.setMSDogeSHIBEli(MSDogeSHIBEli)
						.send({ from: account });
					NotificationManager.success(":D", "Success");
					break;
				case "msdogeSHIBPen":
					await Staking.methods
						.setMSDogeSHIBPen(MSDogeSHIBPen)
						.send({ from: account });
					NotificationManager.success(":D", "Success");
					break;

				case "msdogeCVXAPY":
					await Staking.methods
						.setMSDogeCVXAPY(MSDogeCVXAPY)
						.send({ from: account });
					NotificationManager.success(":D", "Success");
					break;
				case "msdogeCVXEli":
					await Staking.methods
						.setMSDogeCVXEli(MSDogeCVXEli)
						.send({ from: account });
					NotificationManager.success(":D", "Success");
					break;
				case "msdogeCVXPen":
					await Staking.methods
						.setMSDogeCVXPen(MSDogeCVXPen)
						.send({ from: account });
					NotificationManager.success(":D", "Success");
					break;

				case "cryptoAAVEAPY":
					await Staking.methods
						.setCryptoAAVEAPY(CryptoAAVEAPY)
						.send({ from: account });
					NotificationManager.success(":D", "Success");
					break;
				case "cryptoAAVEEli":
					await Staking.methods
						.setCryptoAAVEEli(CryptoAAVEEli)
						.send({ from: account });
					NotificationManager.success(":D", "Success");
					break;
				case "cryptoAAVEPen":
					await Staking.methods
						.setCryptoAAVEPen(CryptoAAVEPen)
						.send({ from: account });
					NotificationManager.success(":D", "Success");
					break;

				case "cryptoUSDTAPY":
					await Staking.methods
						.setCryptoUSDTAPY(CryptoUSDTAPY)
						.send({ from: account });
					NotificationManager.success(":D", "Success");
					break;
				case "cryptoUSDTEli":
					await Staking.methods
						.setCryptoUSDTEli(CryptoUSDTEli)
						.send({ from: account });
					NotificationManager.success(":D", "Success");
					break;
				case "cryptoUSDTPen":
					await Staking.methods
						.setCryptoUSDTPen(CryptoUSDTPen)
						.send({ from: account });
					NotificationManager.success(":D", "Success");
					break;

				case "cryptoTUSDAPY":
					await Staking.methods
						.setCryptoTUSDAPY(CryptoTUSDAPY)
						.send({ from: account });
					NotificationManager.success(":D", "Success");
					break;
				case "cryptoTUSDEli":
					await Staking.methods
						.setCryptoTUSDEli(CryptoTUSDEli)
						.send({ from: account });
					NotificationManager.success(":D", "Success");
					break;
				case "cryptoTUSDPen":
					await Staking.methods
						.setCryptoTUSDPen(CryptoTUSDPen)
						.send({ from: account });
					NotificationManager.success(":D", "Success");
					break;

				case "cryptoETHAPY":
					await Staking.methods
						.setCryptoETHAPY(CryptoETHAPY)
						.send({ from: account });
					NotificationManager.success(":D", "Success");
					break;
				case "cryptoETHEli":
					await Staking.methods
						.setCryptoETHEli(CryptoETHEli)
						.send({ from: account });
					NotificationManager.success(":D", "Success");
					break;
				case "cryptoETHPen":
					await Staking.methods
						.setCryptoETHPen(CryptoETHPen)
						.send({ from: account });
					NotificationManager.success(":D", "Success");
					break;

				case "cryptoGUSDAPY":
					await Staking.methods
						.setCryptoGUSDAPY(CryptoGUSDAPY)
						.send({ from: account });
					NotificationManager.success(":D", "Success");
					break;
				case "cryptoGUSDEli":
					await Staking.methods
						.setCryptoGUSDEli(CryptoGUSDEli)
						.send({ from: account });
					NotificationManager.success(":D", "Success");
					break;
				case "cryptoGUSDPen":
					await Staking.methods
						.setCryptoGUSDPen(CryptoGUSDPen)
						.send({ from: account });
					NotificationManager.success(":D", "Success");
					break;

				case "cryptoPAXAPY":
					await Staking.methods
						.setCryptoPAXAPY(CryptoPAXAPY)
						.send({ from: account });
					NotificationManager.success(":D", "Success");
					break;
				case "cryptoPAXEli":
					await Staking.methods
						.setCryptoPAXEli(CryptoPAXEli)
						.send({ from: account });
					NotificationManager.success(":D", "Success");
					break;
				case "cryptoPAXPen":
					await Staking.methods
						.setCryptoPAXPen(CryptoPAXPen)
						.send({ from: account });
					NotificationManager.success(":D", "Success");
					break;

				default:
					break;
			}
			window.$("#amendPopup").modal("hide");
			setActiveItem(-1);
			setIsLoading(false);
		} catch (err) {
			console.log(err);
			NotificationManager.error(";S", "Failed");
			setIsLoading(false);
		}
	};

	const optionalClaim = async (type) => {
		setIsLoading(true);
		let claimList = [];
		if (!type) claimList = dogeClaimList;
		else claimList = cryptoClaimList;

		try {
			await Staking.methods
				.optionalClaim(claimList, type)
				.send({ from: account });
			NotificationManager.success(":D", "Success");
		} catch (err) {
			NotificationManager.error(":(", "Failed");
		}
		setIsLoading(false);
	};

	return (
		<React.Fragment>
			{isLoading && <Loading />}
			<Navbar />
			<div className="coin-main py-60 ms">
				<div className="container-lg">
					<div className="row d-flex justify-content-center">
						<div className="admin-dashboard-bg">
							<div className="container">
								<div className="">
									<ul className="nav nav-pills nav-pills-custom justify-content-center">
										<li className="nav-item">
											<button
												className="nav-link active"
												id="aurora-tab"
												data-bs-toggle="tab"
												data-bs-target="#aurora-page-content"
												type="button"
												role="tab"
												aria-controls="aurora-page-content"
												aria-selected="true"
											>
												Aurora
											</button>
										</li>
										<li className="nav-item">
											<button
												className="nav-link"
												id="binance-tab"
												data-bs-toggle="tab"
												data-bs-target="#binance-page-content"
												type="button"
												role="tab"
												aria-controls="binance-page-content"
												aria-selected="false"
											>
												Binance
											</button>
										</li>
										<li className="nav-item">
											<button
												className="nav-link"
												id="etherium-tab"
												data-bs-toggle="tab"
												data-bs-target="#etherium-page-content"
												type="button"
												role="tab"
												aria-controls="etherium-page-content"
												aria-selected="false"
											>
												Etherium
											</button>
										</li>
										<li className="nav-item">
											<button
												className="nav-link"
												id="polygon-tab"
												data-bs-toggle="tab"
												data-bs-target="#polygon-page-content"
												type="button"
												role="tab"
												aria-controls="polygon-page-content"
												aria-selected="false"
											>
												Polygon
											</button>
										</li>
										<li className="nav-item">
											<button
												className="nav-link"
												id="avalanche-tab"
												data-bs-toggle="tab"
												data-bs-target="#avalanche-page-content"
												type="button"
												role="tab"
												aria-controls="avalanche-page-content"
												aria-selected="false"
											>
												Avalanche
											</button>
										</li>
									</ul>
								</div>
								<div className="tab-content">
									<div
										id="aurora-page-content"
										className="tab-pane fade show active"
										role="tabpanel"
										aria-labelledby="aurora-tab"
									>
										<div className="coin">
											<div className="px-3">
												<h5>
													PARA{" "}
													<span className="d-inline-block">
														<button
															className="accordion-button transparent-accordion-button p-0"
															type="button"
															data-bs-toggle="collapse"
															data-bs-target="#para-dai"
															aria-expanded="true"
															aria-controls="para-dai"
														></button>
													</span>
													<Switch defaultChecked />
												</h5>
											</div>
											<div
												id="para-dai"
												className="accordion-collapse collapse show"
											>
												<div className="row">
													<Box
														account={account}
														initData={initData}
														setActiveItem={setActiveItem}
														apy={ParaDAIAPY}
														setAPY={setParaDAIAPY}
														eli={ParaDAIEli}
														setEli={setParaDAIEli}
														pen={ParaDAIPen}
														setPen={setParaDAIPen}
														initDataKeyAPY="paraDAIAPY"
														initDataKeyEli="paraDAIEli"
														initDataKeyPen="paraDAIPen"
														title={"PARA-DAI"}
													/>

													<Box
														account={account}
														initData={initData}
														setActiveItem={setActiveItem}
														apy={ParaUSDTAPY}
														setAPY={setParaUSDTAPY}
														eli={ParaUSDTEli}
														setEli={setParaUSDTEli}
														pen={ParaUSDTPen}
														setPen={setParaUSDTPen}
														initDataKeyAPY="paraUSDTAPY"
														initDataKeyEli="paraUSDTEli"
														initDataKeyPen="paraUSDTPen"
														title={"PARA-USDT"}
													/>
												</div>

												<div className="row">
													<Box
														account={account}
														initData={initData}
														setActiveItem={setActiveItem}
														apy={ParaUSDCAPY}
														setAPY={setParaUSDCAPY}
														eli={ParaUSDCEli}
														setEli={setParaUSDCEli}
														pen={ParaUSDCPen}
														setPen={setParaUSDCPen}
														initDataKeyAPY="paraUSDCAPY"
														initDataKeyEli="paraUSDCEli"
														initDataKeyPen="paraUSDCPen"
														title={"PARA-USDC"}
													/>

													<Box
														account={account}
														initData={initData}
														setActiveItem={setActiveItem}
														apy={ParaPAXAPY}
														setAPY={setParaPAXAPY}
														eli={ParaPAXEli}
														setEli={setParaPAXEli}
														pen={ParaPAXPen}
														setPen={setParaPAXPen}
														initDataKeyAPY="paraPAXAPY"
														initDataKeyEli="paraPAXEli"
														initDataKeyPen="paraPAXPen"
														title={"PARA-PAX"}
													/>
												</div>

												<div className="row">
													<Box
														account={account}
														initData={initData}
														setActiveItem={setActiveItem}
														apy={ParaTUSDAPY}
														setAPY={setParaTUSDAPY}
														eli={ParaTUSDEli}
														setEli={setParaTUSDEli}
														pen={ParaTUSDPen}
														setPen={setParaTUSDPen}
														initDataKeyAPY="paraTUSDAPY"
														initDataKeyEli="paraTUSDEli"
														initDataKeyPen="paraTUSDPen"
														title={"PARA-TUSD"}
													/>

													<Box
														account={account}
														initData={initData}
														setActiveItem={setActiveItem}
														apy={ParaUSDPAPY}
														setAPY={setParaUSDPAPY}
														eli={ParaUSDPEli}
														setEli={setParaUSDPEli}
														pen={ParaUSDPPen}
														setPen={setParaUSDPPen}
														initDataKeyAPY="paraUSDPAPY"
														initDataKeyEli="paraUSDPEli"
														initDataKeyPen="paraUSDPPen"
														title={"PARA-USDP"}
													/>
												</div>
											</div>
										</div>

										<div className="coin">
											<div className="px-3">
												<h5>
													ALPHA{" "}
													<span className="d-inline-block">
														<button
															className="accordion-button transparent-accordion-button p-0"
															type="button"
															data-bs-toggle="collapse"
															data-bs-target="#alpha"
															aria-expanded="true"
															aria-controls="alpha"
														></button>
													</span>
													<Switch defaultChecked />
												</h5>
											</div>
											<div
												id="alpha"
												className="accordion-collapse collapse show"
											>
												<div className="row">
													<Box
														account={account}
														initData={initData}
														setActiveItem={setActiveItem}
														apy={AlphaELONAPY}
														setAPY={setAlphaELONAPY}
														eli={AlphaELONEli}
														setEli={setAlphaELONEli}
														pen={AlphaELONPen}
														setPen={setAlphaELONPen}
														initDataKeyAPY="alphaELONAPY"
														initDataKeyEli="alphaELONEli"
														initDataKeyPen="alphaELONPen"
														title={"ALPHA-ELON"}
													/>

													<Box
														account={account}
														initData={initData}
														setActiveItem={setActiveItem}
														apy={AlphaSHIBAPY}
														setAPY={setAlphaSHIBAPY}
														eli={AlphaSHIBEli}
														setEli={setAlphaSHIBEli}
														pen={AlphaSHIBPen}
														setPen={setAlphaSHIBPen}
														initDataKeyAPY="alphaSHIBAPY"
														initDataKeyEli="alphaSHIBEli"
														initDataKeyPen="alphaSHIBPen"
														title={"ALPHA-SHIB"}
													/>
												</div>

												<div className="row">
													<Box
														account={account}
														initData={initData}
														setActiveItem={setActiveItem}
														apy={AlphaMSDOGEAPY}
														setAPY={setAlphaMSDOGEAPY}
														eli={AlphaMSDOGEEli}
														setEli={setAlphaMSDOGEEli}
														pen={AlphaMSDOGEPen}
														setPen={setAlphaMSDOGEPen}
														initDataKeyAPY="alphaMSDOGEAPY"
														initDataKeyEli="alphaMSDOGEEli"
														initDataKeyPen="alphaMSDOGEPen"
														title={"ALPHA-MSDOGE"}
													/>

													<Box
														account={account}
														initData={initData}
														setActiveItem={setActiveItem}
														apy={AlphaHOGEAPY}
														setAPY={setAlphaHOGEAPY}
														eli={AlphaHOGEEli}
														setEli={setAlphaHOGEEli}
														pen={AlphaHOGEPen}
														setPen={setAlphaHOGEPen}
														initDataKeyAPY="alphaHOGEAPY"
														initDataKeyEli="alphaHOGEEli"
														initDataKeyPen="alphaHOGEPen"
														title={"ALPHA-HOGE"}
													/>
												</div>

												<div className="row">
													<Box
														account={account}
														initData={initData}
														setActiveItem={setActiveItem}
														apy={AlphaSMIAPY}
														setAPY={setAlphaSMIAPY}
														eli={AlphaSMIEli}
														setEli={setAlphaSMIEli}
														pen={AlphaSMIPen}
														setPen={setAlphaSMIPen}
														initDataKeyAPY="alphaSMIAPY"
														initDataKeyEli="alphaSMIEli"
														initDataKeyPen="alphaSMIPen"
														title={"ALPHA-SMI"}
													/>

													<Box
														account={account}
														initData={initData}
														setActiveItem={setActiveItem}
														apy={AlphaSUSHIAPY}
														setAPY={setAlphaSUSHIAPY}
														eli={AlphaSUSHIEli}
														setEli={setAlphaSUSHIEli}
														pen={AlphaSUSHIPen}
														setPen={setAlphaSUSHIPen}
														initDataKeyAPY="alphaSUSHIAPY"
														initDataKeyEli="alphaSUSHIEli"
														initDataKeyPen="alphaSUSHIPen"
														title={"ALPHA-SUSHI"}
													/>
												</div>
											</div>
										</div>

										<div className="coin">
											<div className="px-3">
												<h5>
													OMEGA{" "}
													<span className="d-inline-block">
														<button
															className="accordion-button transparent-accordion-button p-0"
															type="button"
															data-bs-toggle="collapse"
															data-bs-target="#omega"
															aria-expanded="true"
															aria-controls="omega"
														></button>
													</span>
													<Switch defaultChecked />
												</h5>
											</div>
											<div
												id="omega"
												className="accordion-collapse collapse show"
											>
												<div className="row">
													<Box
														account={account}
														initData={initData}
														setActiveItem={setActiveItem}
														apy={OmegaCRVAPY}
														setAPY={setOmegaCRVAPY}
														eli={OmegaCRVEli}
														setEli={setOmegaCRVEli}
														pen={OmegaCRVPen}
														setPen={setOmegaCRVPen}
														initDataKeyAPY="omegaCRVAPY"
														initDataKeyEli="omegaCRVEli"
														initDataKeyPen="omegaCRVPen"
														title={"OMEGA-CRV"}
													/>

													<Box
														account={account}
														initData={initData}
														setActiveItem={setActiveItem}
														apy={OmegaKNCAPY}
														setAPY={setOmegaKNCAPY}
														eli={OmegaKNCEli}
														setEli={setOmegaKNCEli}
														pen={OmegaKNCPen}
														setPen={setOmegaKNCPen}
														initDataKeyAPY="omegaKNCAPY"
														initDataKeyEli="omegaKNCEli"
														initDataKeyPen="omegaKNCPen"
														title={"OMEGA-KNC"}
													/>
												</div>

												<div className="row">
													<Box
														account={account}
														initData={initData}
														setActiveItem={setActiveItem}
														apy={OmegaZRXAPY}
														setAPY={setOmegaZRXAPY}
														eli={OmegaZRXEli}
														setEli={setOmegaZRXEli}
														pen={OmegaZRXPen}
														setPen={setOmegaZRXPen}
														initDataKeyAPY="omegaZRXAPY"
														initDataKeyEli="omegaZRXEli"
														initDataKeyPen="omegaZRXPen"
														title={"OMEGA-ZRX"}
													/>

													<Box
														account={account}
														initData={initData}
														setActiveItem={setActiveItem}
														apy={OmegaBNTAPY}
														setAPY={setOmegaBNTAPY}
														eli={OmegaBNTEli}
														setEli={setOmegaBNTEli}
														pen={OmegaBNTPen}
														setPen={setOmegaBNTPen}
														initDataKeyAPY="omegaBNTAPY"
														initDataKeyEli="omegaBNTEli"
														initDataKeyPen="omegaBNTPen"
														title={"OMEGA-BNT"}
													/>
												</div>

												<div className="row">
													<Box
														account={account}
														initData={initData}
														setActiveItem={setActiveItem}
														apy={OmegaUNIAPY}
														setAPY={setOmegaUNIAPY}
														eli={OmegaUNIEli}
														setEli={setOmegaUNIEli}
														pen={OmegaUNIPen}
														setPen={setOmegaUNIPen}
														initDataKeyAPY="omegaUNIAPY"
														initDataKeyEli="omegaUNIEli"
														initDataKeyPen="omegaUNIPen"
														title={"OMEGA-UNI"}
													/>

													<Box
														account={account}
														initData={initData}
														setActiveItem={setActiveItem}
														apy={OmegaMKRAPY}
														setAPY={setOmegaMKRAPY}
														eli={OmegaMKREli}
														setEli={setOmegaMKREli}
														pen={OmegaMKRPen}
														setPen={setOmegaMKRPen}
														initDataKeyAPY="omegaMKRAPY"
														initDataKeyEli="omegaMKREli"
														initDataKeyPen="omegaMKRPen"
														title={"OMEGA-MKR"}
													/>
												</div>
											</div>
										</div>

										<div className="coin">
											<div className="px-3">
												<h5>
													eUSD{" "}
													<span className="d-inline-block">
														<button
															className="accordion-button transparent-accordion-button p-0"
															type="button"
															data-bs-toggle="collapse"
															data-bs-target="#eusd"
															aria-expanded="true"
															aria-controls="eusd"
														></button>
													</span>
													<Switch defaultChecked />
												</h5>
											</div>
											<div
												id="eusd"
												className="accordion-collapse collapse show"
											>
												<div className="row">
													<Box
														account={account}
														initData={initData}
														setActiveItem={setActiveItem}
														apy={eUSDAAVEAPY}
														setAPY={seteUSDAAVEAPY}
														eli={eUSDAAVEEli}
														setEli={seteUSDAAVEEli}
														pen={eUSDAAVEPen}
														setPen={seteUSDAAVEPen}
														initDataKeyAPY="eusdAAVEAPY"
														initDataKeyEli="eusdAAVEEli"
														initDataKeyPen="eusdAAVEPen"
														title={"eUSD-AAVE"}
													/>

													<Box
														account={account}
														initData={initData}
														setActiveItem={setActiveItem}
														apy={eUSDCOMPAPY}
														setAPY={seteUSDCOMPAPY}
														eli={eUSDCOMPEli}
														setEli={seteUSDCOMPEli}
														pen={eUSDCOMPPen}
														setPen={seteUSDCOMPPen}
														initDataKeyAPY="eusdCOMPAPY"
														initDataKeyEli="eusdCOMPEli"
														initDataKeyPen="eusdCOMPPen"
														title={"eUSD-COMP"}
													/>
												</div>

												<div className="row">
													<Box
														account={account}
														initData={initData}
														setActiveItem={setActiveItem}
														apy={eUSDWBTCAPY}
														setAPY={seteUSDWBTCAPY}
														eli={eUSDWBTCEli}
														setEli={seteUSDWBTCEli}
														pen={eUSDWBTCPen}
														setPen={seteUSDWBTCPen}
														initDataKeyAPY="eusdWBTCAPY"
														initDataKeyEli="eusdWBTCEli"
														initDataKeyPen="eusdWBTCPen"
														title={"eUSD-WBTC"}
													/>

													<Box
														account={account}
														initData={initData}
														setActiveItem={setActiveItem}
														apy={eUSDWETHAPY}
														setAPY={seteUSDWETHAPY}
														eli={eUSDWETHEli}
														setEli={seteUSDWETHEli}
														pen={eUSDWETHPen}
														setPen={seteUSDWETHPen}
														initDataKeyAPY="eusdWETHAPY"
														initDataKeyEli="eusdWETHEli"
														initDataKeyPen="eusdWETHPen"
														title={"eUSD-WETH"}
													/>
												</div>

												<div className="row">
													<Box
														account={account}
														initData={initData}
														setActiveItem={setActiveItem}
														apy={eUSDOHMAPY}
														setAPY={seteUSDOHMAPY}
														eli={eUSDOHMEli}
														setEli={seteUSDOHMEli}
														pen={eUSDOHMPen}
														setPen={seteUSDOHMPen}
														initDataKeyAPY="eusdOHMAPY"
														initDataKeyEli="eusdOHMEli"
														initDataKeyPen="eusdOHMPen"
														title={"eUSD-OHM"}
													/>

													<Box
														account={account}
														initData={initData}
														setActiveItem={setActiveItem}
														apy={eUSDCVXAPY}
														setAPY={seteUSDCVXAPY}
														eli={eUSDCVXEli}
														setEli={seteUSDCVXEli}
														pen={eUSDCVXPen}
														setPen={seteUSDCVXPen}
														initDataKeyAPY="eusdCVXAPY"
														initDataKeyEli="eusdCVXEli"
														initDataKeyPen="eusdCVXPen"
														title={"eUSD-CVX"}
													/>
												</div>
											</div>
										</div>

										<div className="coin">
											<div className="px-3">
												<h5>
													MSDOGE{" "}
													<span className="d-inline-block">
														<button
															className="accordion-button transparent-accordion-button p-0"
															type="button"
															data-bs-toggle="collapse"
															data-bs-target="#msdoge"
															aria-expanded="true"
															aria-controls="msdoge"
														></button>
													</span>
													<Switch defaultChecked />
												</h5>
											</div>
											<div
												id="msdoge"
												className="accordion-collapse collapse show"
											>
												<div className="row">
													<Box
														account={account}
														initData={initData}
														setActiveItem={setActiveItem}
														apy={MSDogeWETHAPY}
														setAPY={setMSDogeWETHAPY}
														eli={MSDogeWETHEli}
														setEli={setMSDogeWETHEli}
														pen={MSDogeWETHPen}
														setPen={setMSDogeWETHPen}
														initDataKeyAPY="msdogeWETHAPY"
														initDataKeyEli="msdogeWETHEli"
														initDataKeyPen="msdogeWETHPen"
														title={"MSDOGE-WETH"}
													/>

													<Box
														account={account}
														initData={initData}
														setActiveItem={setActiveItem}
														apy={MSDogeDAIAPY}
														setAPY={setMSDogeDAIAPY}
														eli={MSDogeDAIEli}
														setEli={setMSDogeDAIEli}
														pen={MSDogeDAIPen}
														setPen={setMSDogeDAIPen}
														initDataKeyAPY="msdogeDAIAPY"
														initDataKeyEli="msdogeDAIEli"
														initDataKeyPen="msdogeDAIPen"
														title={"MSDOGE-DAI"}
													/>
												</div>

												<div className="row">
													<Box
														account={account}
														initData={initData}
														setActiveItem={setActiveItem}
														apy={MSDogeUSDCAPY}
														setAPY={setMSDogeUSDCAPY}
														eli={MSDogeUSDCEli}
														setEli={setMSDogeUSDCEli}
														pen={MSDogeUSDCPen}
														setPen={setMSDogeUSDCPen}
														initDataKeyAPY="msdogeUSDCAPY"
														initDataKeyEli="msdogeUSDCEli"
														initDataKeyPen="msdogeUSDCPen"
														title={"MSDOGE-USDC"}
													/>

													<Box
														account={account}
														initData={initData}
														setActiveItem={setActiveItem}
														apy={MSDogeFRAXAPY}
														setAPY={setMSDogeFRAXAPY}
														eli={MSDogeFRAXEli}
														setEli={setMSDogeFRAXEli}
														pen={MSDogeFRAXPen}
														setPen={setMSDogeFRAXPen}
														initDataKeyAPY="msdogeFRAXAPY"
														initDataKeyEli="msdogeFRAXEli"
														initDataKeyPen="msdogeFRAXPen"
														title={"MSDOGE-FRAX"}
													/>
												</div>

												<div className="row">
													<Box
														account={account}
														initData={initData}
														setActiveItem={setActiveItem}
														apy={MSDogeSHIBAPY}
														setAPY={setMSDogeSHIBAPY}
														eli={MSDogeSHIBEli}
														setEli={setMSDogeSHIBEli}
														pen={MSDogeSHIBPen}
														setPen={setMSDogeSHIBPen}
														initDataKeyAPY="msdogeSHIBAPY"
														initDataKeyEli="msdogeSHIBEli"
														initDataKeyPen="msdogeSHIBPen"
														title={"MSDOGE-SHIB"}
													/>

													<Box
														account={account}
														initData={initData}
														setActiveItem={setActiveItem}
														apy={MSDogeCVXAPY}
														setAPY={setMSDogeCVXAPY}
														eli={MSDogeCVXEli}
														setEli={setMSDogeCVXEli}
														pen={MSDogeCVXPen}
														setPen={setMSDogeCVXPen}
														initDataKeyAPY="msdogeCVXAPY"
														initDataKeyEli="msdogeCVXEli"
														initDataKeyPen="msdogeCVXPen"
														title={"MSDOGE-CVX"}
													/>
												</div>
											</div>
										</div>

										<div className="coin">
											<div className="px-3">
												<h5>
													CRYPTO{" "}
													<span className="d-inline-block">
														<button
															className="accordion-button transparent-accordion-button p-0"
															type="button"
															data-bs-toggle="collapse"
															data-bs-target="#crypto"
															aria-expanded="true"
															aria-controls="crypto"
														></button>
													</span>
													<Switch defaultChecked />{" "}
												</h5>
											</div>
											<div
												id="crypto"
												className="accordion-collapse collapse show"
											>
												<div className="row">
													<Box
														account={account}
														initData={initData}
														setActiveItem={setActiveItem}
														apy={CryptoAAVEAPY}
														setAPY={setCryptoAAVEAPY}
														eli={CryptoAAVEEli}
														setEli={setCryptoAAVEEli}
														pen={CryptoAAVEPen}
														setPen={setCryptoAAVEPen}
														initDataKeyAPY="cryptoAAVEAPY"
														initDataKeyEli="cryptoAAVEEli"
														initDataKeyPen="cryptoAAVEPen"
														title={"Crypto-AAVE"}
													/>

													<Box
														account={account}
														initData={initData}
														setActiveItem={setActiveItem}
														apy={CryptoUSDTAPY}
														setAPY={setCryptoUSDTAPY}
														eli={CryptoUSDTEli}
														setEli={setCryptoUSDTEli}
														pen={CryptoUSDTPen}
														setPen={setCryptoUSDTPen}
														initDataKeyAPY="cryptoUSDTAPY"
														initDataKeyEli="cryptoUSDTEli"
														initDataKeyPen="cryptoUSDTPen"
														title={"Crypto-USDT"}
													/>
												</div>

												<div className="row">
													<Box
														account={account}
														initData={initData}
														setActiveItem={setActiveItem}
														apy={CryptoTUSDAPY}
														setAPY={setCryptoTUSDAPY}
														eli={CryptoTUSDEli}
														setEli={setCryptoTUSDEli}
														pen={CryptoTUSDPen}
														setPen={setCryptoTUSDPen}
														initDataKeyAPY="cryptoTUSDAPY"
														initDataKeyEli="cryptoTUSDEli"
														initDataKeyPen="cryptoTUSDPen"
														title={"Crypto-TUSD"}
													/>

													<Box
														account={account}
														initData={initData}
														setActiveItem={setActiveItem}
														apy={CryptoETHAPY}
														setAPY={setCryptoETHAPY}
														eli={CryptoETHEli}
														setEli={setCryptoETHEli}
														pen={CryptoETHPen}
														setPen={setCryptoETHPen}
														initDataKeyAPY="cryptoETHAPY"
														initDataKeyEli="cryptoETHEli"
														initDataKeyPen="cryptoETHPen"
														title={"Crypto-ETH"}
													/>
												</div>

												<div className="row">
													<Box
														account={account}
														initData={initData}
														setActiveItem={setActiveItem}
														apy={CryptoGUSDAPY}
														setAPY={setCryptoGUSDAPY}
														eli={CryptoGUSDEli}
														setEli={setCryptoGUSDEli}
														pen={CryptoGUSDPen}
														setPen={setCryptoGUSDPen}
														initDataKeyAPY="cryptoGUSDAPY"
														initDataKeyEli="cryptoGUSDEli"
														initDataKeyPen="cryptoGUSDPen"
														title={"Crypto-GUSD"}
													/>

													<Box
														account={account}
														initData={initData}
														setActiveItem={setActiveItem}
														apy={CryptoPAXAPY}
														setAPY={setCryptoPAXAPY}
														eli={CryptoPAXEli}
														setEli={setCryptoPAXEli}
														pen={CryptoPAXPen}
														setPen={setCryptoPAXPen}
														initDataKeyAPY="cryptoPAXAPY"
														initDataKeyEli="cryptoPAXEli"
														initDataKeyPen="cryptoPAXPen"
														title={"Crypto-PAX"}
													/>
												</div>
											</div>
										</div>
									</div>

									<div
										id="binance-page-content"
										role="tabpanel"
										aria-labelledby="binance-tab"
									></div>
									<div
										id="etherium-page-content"
										role="tabpanel"
										aria-labelledby="etherium-tab"
									></div>
									<div
										id="polygon-page-content"
										role="tabpanel"
										aria-labelledby="polygon-tab"
									></div>
									<div
										id="avalanche-page-content"
										role="tabpanel"
										aria-labelledby="avalanche-tab"
									></div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>

			{/* Modal */}

			<div
				className="modal fade"
				id="amendPopup"
				tabIndex="-1"
				aria-labelledby="amendPopup"
				aria-hidden="true"
				data-bs-backdrop="static"
			>
				<div className="modal-dialog">
					<div className="modal-content">
						<div className="modal-body rel">
							<button
								type="button"
								className="closebtn"
								data-bs-dismiss="modal"
								aria-label="Close"
							>
								<svg
									xmlns="http://www.w3.org/2000/svg"
									className="h-6 w-6"
									fill="none"
									viewBox="0 0 24 24"
									stroke="currentColor"
								>
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										strokeWidth="2"
										d="M11 17l-5-5m0 0l5-5m-5 5h12"
									/>
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
													>
														Amend
													</button>
													<div
														className="claim-btn-failed color5 py-2 px-4 w-100 text-center"
														onClick={() => setActiveItem(-1)}
														data-bs-dismiss="modal"
													>
														Cancel
													</div>
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
	);
};

export default AdminDashboard;
