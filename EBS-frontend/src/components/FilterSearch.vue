<template>
	
	<div class="container pt-5">
		<div class="row">
			<div class="col-12">
				<form>
					<div class="search-filter-box">
						<div class="inner-box-1">
							<div class="filter-1">
								<label>SEARCH ARTIST, EVENT OR VENUE</label>
								<div class="search">
									<span><i class="bi bi-search"></i></span>
									<input type="text" placeholder="e.g., Maya Sterling, Royal Albert...">
								</div>
							</div>
							<div class="filter-2">
								<label>CATEGORY</label>
								<select>
									<option>All Categories</option>
									<option>Pop & Electronic</option>
									<option>Classical Symphony</option>
									<option>Indie & Acoustic</option>
									<option>Music & Fiestival</option>
								</select>
							</div>
							<div class="filter-3">
								<label>STATUS</label>
								<select>
									<option>All Active</option>
									<option>Upcoming</option>
									<option>Ongoing</option>
								</select>
							</div>
							<button><i class="bi bi-search"></i> Find Passes</button>
						</div>
						<hr>
						<div class="inner-box-2">
							<div class="filter-4">
								<p><i class="bi bi-fire"></i> Popular right now:</p>
								<p>Maya Sterling</p>
								<p>Julian Vance Nocturne</p>
								<p>Solstice Arts Gathering</p>
								<p>The Paper Kites</p>
							</div>
							<button type="reset">Reset Filter</button>
						</div>
					</div>
				</form>
			</div>
		</div>
	</div>

</template>

<style scoped>
	
	.search-filter-box{
		padding: 20px;
		background-color: white;
		border-radius: 20px;
		box-shadow: 0px 0px 20px #E8E8E8;
		border: solid 1px #EAE5DE;
		position: relative;
	}

	.filter-1{
		width: 100%;
	}
	.filter-2{
		width: 100%;
	}
	.filter-3{
		width: 100%;
	}
	.filter-4{
		display: flex;
		gap: 20px;
	}







	.inner-box-1{
		display: flex;
		justify-content: space-between;
		align-items: center;
		gap: 10px;
	}

	label{
		font-size: 12px;
		font-weight: bold;
		letter-spacing: 0.6px;
	}

	.search{
		display: flex;
		justify-content: center;
		align-items: center;
	}

	span{
		padding: 8.5px 15px;
		background-color: #F5F0E8;
		border: none;
		border-radius: 100px 0px 0px 100px;
	}

	span i{
		font-size: 14px;
	}

	input{
		padding: 10px;
		width: 450px;
		border: none;
		background-color: #F5F0E8;
		border-radius: 0px 100px 100px 0px;
		font-size: 14px;
	}

	input:focus{
		outline: solid 1px #D97757;
	}




	select{
		padding: 10px;
		width: 100%;
		border: none;
		border-radius: 100px;
		background-color: #F5F0E8;
		font-size: 14px;
	}

	select:focus{
		outline: solid 1px #D97757;
	}

	.inner-box-1 button{
		width: 100%;
		padding: 10px;
		border: none;
		background-color: #D97757;
		color: white;
		border-radius: 100px;
		font-size: 14px;
		margin-top: 25px;
	}





	.filter-4 :nth-child(1){
		background-color: white;
	}

	.filter-4 :nth-child(1) i{
		color: #D97757;
	}

	.filter-4 p{
		color: #2B2F38;
		background-color: #F5F0E8;
		padding: 5px 15px;
		font-size: 12px;
		font-weight: 500;
		border-radius: 100px;
	}

	.inner-box-2 button{
		position: absolute;
		right: 20px;
		bottom: 20%;
		color: #D97757;
		font-size: 14px;
		font-weight: bold;
		border: none;
		background-color: white;
	}



	form{
		display: contents;
	}



</style>