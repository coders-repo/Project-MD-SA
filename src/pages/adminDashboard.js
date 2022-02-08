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
		loriaAPY: "",
		dogeEli: "",
		loriaEli: "",
		dogePen: "",
		loriaPen: "",
	});
	const [DogeAPY, setDogeAPY] = useState("");
	const [LoriaAPY, setLoriaAPY] = useState("");
	const [DogeEli, setDogeEli] = useState("");
	const [LoriaEli, setLoriaEli] = useState("");
	const [DogePen, setDogePenalty] = useState("");
	const [LoriaPen, setLoriaPenalty] = useState("");
	const [activeItem, setActiveItem] = useState(-1);
	const [isLoading, setIsLoading] = useState(false);
	const [dogeClaimList, setDogeCliamList] = useState([]);
	const [cryptoClaimList, setCryptoCliamList] = useState([]);

	useEffect(async () => {
		const _web3 = await getWeb3();
		const _Staking = new _web3.eth.Contract(StakingABI, StakingAddress);
		setWeb3(_web3);
		setStaking(_Staking);
	}, []);

	useEffect(async () => {
		if (account && Staking && activeItem == -1) {
			const _dogeAPY = await Staking.methods.DogeAPY().call();
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
				loriaPen: _loriaPen,
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
		}
	};

	const changeItem = async () => {
		try {
			setIsLoading(true);
			switch (activeItem.toString()) {
				case "0":
					await Staking.methods.setDogeAPY(DogeAPY).send({ from: account });
					NotificationManager.success(":D", "Success");
					break;
				case "1":
					await Staking.methods.setLoriaAPY(LoriaAPY).send({ from: account });
					NotificationManager.success(":D", "Success");
					break;
					break;
				case "2":
					await Staking.methods.setDogeElig(DogeEli).send({ from: account });
					NotificationManager.success(":D", "Success");
					break;
				case "3":
					alert();
					await Staking.methods.setLoriaElig(LoriaEli).send({ from: account });
					NotificationManager.success(":D", "Success");
					break;
				case "4":
					await Staking.methods.setDogePenalty(DogePen).send({ from: account });
					NotificationManager.success(":D", "Success");
					break;
				case "5":
					await Staking.methods
						.setLoriaPenalty(LoriaPen)
						.send({ from: account });
					NotificationManager.success(":D", "Success");
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
														coin={DogeAPY}
														setCoin={setDogeAPY}
														initDataKey="dogeAPY"
														title={"PARA-DAI"}
													/>

													<Box
														account={account}
														initData={initData}
														setActiveItem={setActiveItem}
														coin={DogeAPY}
														setCoin={setDogeAPY}
														initDataKey="dogeAPY"
														title={"PARA-USDT"}
													/>
												</div>

												<div className="row">
													<Box
														account={account}
														initData={initData}
														setActiveItem={setActiveItem}
														coin={DogeAPY}
														setCoin={setDogeAPY}
														initDataKey="dogeAPY"
														title={"PARA-USDC"}
													/>

													<Box
														account={account}
														initData={initData}
														setActiveItem={setActiveItem}
														coin={DogeAPY}
														setCoin={setDogeAPY}
														initDataKey="dogeAPY"
														title={"PARA-GUSD"}
													/>
												</div>

												<div className="row">
													<Box
														account={account}
														initData={initData}
														setActiveItem={setActiveItem}
														coin={DogeAPY}
														setCoin={setDogeAPY}
														initDataKey="dogeAPY"
														title={"PARA-TUSD"}
													/>

													<Box
														account={account}
														initData={initData}
														setActiveItem={setActiveItem}
														coin={DogeAPY}
														setCoin={setDogeAPY}
														initDataKey="dogeAPY"
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
														coin={DogeAPY}
														setCoin={setDogeAPY}
														initDataKey="dogeAPY"
														title={"ALPHA-ELON"}
													/>

													<Box
														account={account}
														initData={initData}
														setActiveItem={setActiveItem}
														coin={DogeAPY}
														setCoin={setDogeAPY}
														initDataKey="dogeAPY"
														title={"ALPHA-SHIB"}
													/>
												</div>

												<div className="row">
													<Box
														account={account}
														initData={initData}
														setActiveItem={setActiveItem}
														coin={DogeAPY}
														setCoin={setDogeAPY}
														initDataKey="dogeAPY"
														title={"ALPHA-MSDOGE"}
													/>

													<Box
														account={account}
														initData={initData}
														setActiveItem={setActiveItem}
														coin={DogeAPY}
														setCoin={setDogeAPY}
														initDataKey="dogeAPY"
														title={"ALPHA-HOGE"}
													/>
												</div>

												<div className="row">
													<Box
														account={account}
														initData={initData}
														setActiveItem={setActiveItem}
														coin={DogeAPY}
														setCoin={setDogeAPY}
														initDataKey="dogeAPY"
														title={"ALPHA-SMI"}
													/>

													<Box
														account={account}
														initData={initData}
														setActiveItem={setActiveItem}
														coin={DogeAPY}
														setCoin={setDogeAPY}
														initDataKey="dogeAPY"
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
														coin={DogeAPY}
														setCoin={setDogeAPY}
														initDataKey="dogeAPY"
														title={"OMEGA-CRV"}
													/>

													<Box
														account={account}
														initData={initData}
														setActiveItem={setActiveItem}
														coin={DogeAPY}
														setCoin={setDogeAPY}
														initDataKey="dogeAPY"
														title={"OMEGA-KNC"}
													/>
												</div>

												<div className="row">
													<Box
														account={account}
														initData={initData}
														setActiveItem={setActiveItem}
														coin={DogeAPY}
														setCoin={setDogeAPY}
														initDataKey="dogeAPY"
														title={"OMEGA-ZRX"}
													/>

													<Box
														account={account}
														initData={initData}
														setActiveItem={setActiveItem}
														coin={DogeAPY}
														setCoin={setDogeAPY}
														initDataKey="dogeAPY"
														title={"OMEGA-BNT"}
													/>
												</div>

												<div className="row">
													<Box
														account={account}
														initData={initData}
														setActiveItem={setActiveItem}
														coin={DogeAPY}
														setCoin={setDogeAPY}
														initDataKey="dogeAPY"
														title={"OMEGA-UNI"}
													/>

													<Box
														account={account}
														initData={initData}
														setActiveItem={setActiveItem}
														coin={DogeAPY}
														setCoin={setDogeAPY}
														initDataKey="dogeAPY"
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
														coin={DogeAPY}
														setCoin={setDogeAPY}
														initDataKey="dogeAPY"
														title={"eUSD-AAVE"}
													/>

													<Box
														account={account}
														initData={initData}
														setActiveItem={setActiveItem}
														coin={DogeAPY}
														setCoin={setDogeAPY}
														initDataKey="dogeAPY"
														title={"eUSD-COMP"}
													/>
												</div>

												<div className="row">
													<Box
														account={account}
														initData={initData}
														setActiveItem={setActiveItem}
														coin={DogeAPY}
														setCoin={setDogeAPY}
														initDataKey="dogeAPY"
														title={"eUSD-WBTC"}
													/>

													<Box
														account={account}
														initData={initData}
														setActiveItem={setActiveItem}
														coin={DogeAPY}
														setCoin={setDogeAPY}
														initDataKey="dogeAPY"
														title={"eUSD-WETH"}
													/>
												</div>

												<div className="row">
													<Box
														account={account}
														initData={initData}
														setActiveItem={setActiveItem}
														coin={DogeAPY}
														setCoin={setDogeAPY}
														initDataKey="dogeAPY"
														title={"eUSD-OHM"}
													/>

													<Box
														account={account}
														initData={initData}
														setActiveItem={setActiveItem}
														coin={DogeAPY}
														setCoin={setDogeAPY}
														initDataKey="dogeAPY"
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
														coin={DogeAPY}
														setCoin={setDogeAPY}
														initDataKey="dogeAPY"
														title={"MSDOGE-WETH"}
													/>

													<Box
														account={account}
														initData={initData}
														setActiveItem={setActiveItem}
														coin={DogeAPY}
														setCoin={setDogeAPY}
														initDataKey="dogeAPY"
														title={"MSDOGE-DAI"}
													/>
												</div>

												<div className="row">
													<Box
														account={account}
														initData={initData}
														setActiveItem={setActiveItem}
														coin={DogeAPY}
														setCoin={setDogeAPY}
														initDataKey="dogeAPY"
														title={"MSDOGE-USDC"}
													/>

													<Box
														account={account}
														initData={initData}
														setActiveItem={setActiveItem}
														coin={DogeAPY}
														setCoin={setDogeAPY}
														initDataKey="dogeAPY"
														title={"MSDOGE-FRAX"}
													/>
												</div>

												<div className="row">
													<Box
														account={account}
														initData={initData}
														setActiveItem={setActiveItem}
														coin={DogeAPY}
														setCoin={setDogeAPY}
														initDataKey="dogeAPY"
														title={"MSDOGE-SHIB"}
													/>

													<Box
														account={account}
														initData={initData}
														setActiveItem={setActiveItem}
														coin={DogeAPY}
														setCoin={setDogeAPY}
														initDataKey="dogeAPY"
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
														coin={DogeAPY}
														setCoin={setDogeAPY}
														initDataKey="dogeAPY"
														title={"CRYPTO-AAVE"}
													/>

													<Box
														account={account}
														initData={initData}
														setActiveItem={setActiveItem}
														coin={DogeAPY}
														setCoin={setDogeAPY}
														initDataKey="dogeAPY"
														title={"CRYPTO-USDT"}
													/>
												</div>

												<div className="row">
													<Box
														account={account}
														initData={initData}
														setActiveItem={setActiveItem}
														coin={DogeAPY}
														setCoin={setDogeAPY}
														initDataKey="dogeAPY"
														title={"CRYPTO-TUSD"}
													/>

													<Box
														account={account}
														initData={initData}
														setActiveItem={setActiveItem}
														coin={DogeAPY}
														setCoin={setDogeAPY}
														initDataKey="dogeAPY"
														title={"CRYPTO-ETH"}
													/>
												</div>

												<div className="row">
													<Box
														account={account}
														initData={initData}
														setActiveItem={setActiveItem}
														coin={DogeAPY}
														setCoin={setDogeAPY}
														initDataKey="dogeAPY"
														title={"CRYPTO-GUSD"}
													/>

													<Box
														account={account}
														initData={initData}
														setActiveItem={setActiveItem}
														coin={DogeAPY}
														setCoin={setDogeAPY}
														initDataKey="dogeAPY"
														title={"CRYPTO-PAX"}
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
