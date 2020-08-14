<template>
	<section class="header">
		<nav>
			<div class="logo">
				<router-link to="/">
					<img
						src="https://www.webmotors.com.br/assets/img/webmotors.svg?t=9353"
						alt=""
					/>
				</router-link>
			</div>
			<div class="menu">
				<div class="header-tabs_container">
					<router-link
						to="/"
						class="tab"
					>

						<img
							src="@/assets/carro.svg"
							alt=""
						>
						<p>
							Carros
						</p>
					</router-link>
					<router-link
						to="motos"
						class="tab"
					>
						<img
							src="@/assets/motocicleta.svg"
							alt=""
						>
						motos</router-link>
				</div>
				<div class="header-button_redirect">
					<router-link
						to="#"
						class="btn btn-secundary"
					>Vender meu carro
					</router-link>
				</div>
			</div>
		</nav>
	</section>
</template>
<script>

export default {
  name: 'Home',

};
</script>
<style>
.menu {
	display: flex;
	justify-content: space-between;
}

.header-tabs_container {
	display: flex;
	justify-content: space-between;
	width: 150px;
}
.header-tabs_container a {
	display: flex;
	justify-content: space-between;
	align-items: center;
}
.header-tabs_container a img {
	width: 40px;
	padding: 0.3rem;
}

.tab {
	display: block;
	padding: 1rem;
	text-align: center;
	text-decoration: none;
	color: #777474fc;
	text-transform: uppercase;
	position: relative;
}

.tab.router-link-exact-active::after {
	content: '';
	width: 100%;
	height: 4px;
	background: red;
	display: block;
	position: absolute;
	bottom: 0;
	left: 0;
}

.tab:hover {
	color: red;
}

.tab.router-link-exact-active {
	color: red;
}

.btn-secundary {
	color: yellow;
	display: block;
	width: 13rem;
	border: 2px solid yellow;
	border-radius: 7px;
	padding: 0.5rem 2rem;
	text-decoration: none;
	text-align: center;
}
</style>
