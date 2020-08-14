<template>
	<div class="home">
		<Header />
		<Form />
		<SeachResult />
		<Footer />
	</div>
</template>

<script>
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import Form from '../components/Form/Form';
import SeachResult from '../components/SearchResult/SeachResult';

export default {
  name: 'Home',
  components: {
    Header,
    Footer,
    Form,
    SeachResult,
  },
};
</script>
<style>
.home {
	width: 100%;
}
</style>
