import { Switch } from "@mui/material";

const Box = ({
	title,
	account,
	initData,
	setActiveItem,
	apy,
	setAPY,
	eli,
	setEli,
	pen,
	setPen,
	initDataKeyAPY,
	initDataKeyEli,
	initDataKeyPen,
}) => {
	return (
		<div className="col-md-12 col-lg-6 col-sm-12 admin-dashboard-page">
			<div className="coin-box p-4">
				<div className="d-flex py-1 flex-wrap row-gap">
					<div>
						<h4>{title}</h4>
					</div>

					<div>
						<Switch defaultChecked />
					</div>
				</div>
				<div className="d-flex py-1 flex-wrap row-gap">
					<div className="border-bottom d-flex flex-grow-1 justify-content-between ">
						<span>
							<small>[{title}] APY (%)</small>
						</span>
						<input
							type="number"
							value={apy}
							onChange={(e) => account && setAPY(e.target.value)}
							className="admin-dashboard-input"
						/>
					</div>
					{initData[initDataKeyAPY] != apy && apy > 0 ? (
						<button
							type="button"
							className="table-btn-dashborad active"
							data-bs-toggle="modal"
							data-bs-target="#amendPopup"
							onClick={() => setActiveItem(initDataKeyAPY)}
						>
							Amend
						</button>
					) : (
						<button type="button" className="table-btn-dashborad">
							Amend
						</button>
					)}
				</div>

				<div className="d-flex py-1 flex-wrap row-gap">
					<div className="border-bottom d-flex flex-grow-1 justify-content-between ">
						<span>
							<small>[{title}] Bonding Lock (Days)</small>
						</span>
						<input
							type="number"
							value={eli}
							onChange={(e) => account && setEli(e.target.value)}
							className="admin-dashboard-input"
						/>
					</div>
					{initData[initDataKeyEli] != eli && eli > 0 ? (
						<button
							type="button"
							className="table-btn-dashborad active"
							data-bs-toggle="modal"
							data-bs-target="#amendPopup"
							onClick={() => setActiveItem(initDataKeyEli)}
						>
							Amend
						</button>
					) : (
						<button type="button" className="table-btn-dashborad">
							Amend
						</button>
					)}
				</div>

				<div className="d-flex py-1 flex-wrap row-gap">
					<div className="border-bottom d-flex flex-grow-1 justify-content-between ">
						<span>
							<small>[{title}] Withdraw Penalty</small>
						</span>
						<input
							type="number"
							value={pen}
							onChange={(e) => account && setPen(e.target.value)}
							className="admin-dashboard-input"
						/>
					</div>
					{initData[initDataKeyPen] != pen && pen > 0 ? (
						<button
							type="button"
							className="table-btn-dashborad active y-button"
							data-bs-toggle="modal"
							data-bs-target="#amendPopup"
							onClick={() => setActiveItem(initDataKeyPen)}
						>
							Amend
						</button>
					) : (
						<button type="button" className="table-btn-dashborad y-button">
							Amend
						</button>
					)}
				</div>
			</div>
		</div>
	);
};

export default Box;
