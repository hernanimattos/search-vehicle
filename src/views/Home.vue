<template>
	<div class="home">
		<Header />
		<Form />
		<Footer />
	</div>
</template>

<script>
import { createNamespacedHelpers } from 'vuex';
const { mapActions } = createNamespacedHelpers('vehicle');
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import Form from '../components/Form/Form';

export default {
	name: 'Home',
	methods: {
		...mapActions(['getVehicles'])
	},
	mounted() {
		// this.getVehicles();
	},
	components: {
		Header,
		Footer,
		Form
	}
};
</script>
