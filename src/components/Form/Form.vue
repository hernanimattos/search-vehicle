<template>
	<section class="form-wrapper">
		<form action="form-search">
			<div class="form-search_top">
				<header>
					<input type="checkbox">
					<input type="checkbox">
				</header>
			</div>

			<div class="form-search_container">
				<div class="form-group columns">
					<div class="form-group column">
						<input
							type="text"
							class="form-field"
						>
						<input
							type="text"
							class="form-field"
						>
					</div>
					<div class="form-group column">
						<input
							type="text"
							class="form-field"
						>
						<input
							type="text"
							class="form-field"
						>
					</div>
				</div>
				<div class="form-group columns">
					<div class="form-group column">
						<input
							type="text"
							class="form-field"
						>
						<input
							type="text"
							class="form-field"
						>
					</div>
					<div class="form-group column">
						<input
							type="text"
							class="form-field cpc"
						>
					</div>
				</div>
			</div>
		</form>
	</section>
</template>
<script>
export default {
	name: 'Form'
};
</script>

<style >
.form-wrapper {
	padding: 1rem;
	background-color: #fff;
}
.form-search_container {
	justify-content: center;
	display: flex;
}
.form-group {
	display: flex;
}
.columns {
	flex-direction: column;
}
.columns .column {
	justify-content: space-around;
}
.form-field {
	width: 50%;
}
.form-field.cpc {
	width: 100%;
}
</style>
