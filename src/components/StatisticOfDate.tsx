const StatisticOfDate = () => {
	return (
		<div className="w-full h-auto bg-[rgb(21,26,41)] rounded-xl display-block border border-gray-600 ">
			
				<div className="flex items-left p-6 text-sm text-gray-500">
					<div className="flex flex-col gap-4  text-white">
						<p className="text-gray-500">Всего записей: 0</p>
						<p>Затраты с: 01.06.2026 по: 11.06.2026</p>
						<div className="flex flex-col gap-1 text-base">
							<span>L 0.00</span>
							<span>$ 0.00</span>
							<span>€ 0.00</span>
						</div>
					
				</div>
			</div>
		</div>
	);
};

export default StatisticOfDate;
