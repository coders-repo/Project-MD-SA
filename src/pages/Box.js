import { Switch } from "@mui/material";

const Box = ({
	title,
	account,
	initData,
	setActiveItem,
	coin,
	setCoin,
	initDataKey,
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
							value={coin}
							onChange={(e) => account && setCoin(e.target.value)}
							className="admin-dashboard-input"
						/>
					</div>
					{initData[initDataKey] != coin && coin > 0 ? (
						<button
							type="button"
							className="table-btn-dashborad active"
							data-bs-toggle="modal"
							data-bs-target="#amendPopup"
							onClick={() => setActiveItem(0)}
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
							value={coin}
							onChange={(e) => account && setCoin(e.target.value)}
							className="admin-dashboard-input"
						/>
					</div>
					{initData[initDataKey] != coin && coin > 0 ? (
						<button
							type="button"
							className="table-btn-dashborad active"
							data-bs-toggle="modal"
							data-bs-target="#amendPopup"
							onClick={() => setActiveItem(0)}
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
							value={coin}
							onChange={(e) => account && setCoin(e.target.value)}
							className="admin-dashboard-input"
						/>
					</div>
					{initData[initDataKey] != coin && coin > 0 ? (
						<button
							type="button"
							className="table-btn-dashborad active y-button"
							data-bs-toggle="modal"
							data-bs-target="#amendPopup"
							onClick={() => setActiveItem(0)}
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
