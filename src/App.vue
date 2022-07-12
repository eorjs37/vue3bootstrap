<template>
	<div class="container">
		<div class="row">
			<div class="col-lg-4 col-sm-12">
				<div class="row mh-100px">
					<div class="col-5 carrot-form-label center">강사명</div>
					<div class="col-7 carrot-form-control align-items-center">
						<div class="w-100per">
							<input type="text" class="form-control" placeholder="Username" />
							<div class="error dp-block">강사명은 필수 값입니다.</div>
						</div>
					</div>
				</div>
			</div>
			<div class="col-lg-8 col-sm-12">
				<div class="row mh-100px">
					<div class="col-5 carrot-form-label center">강사명</div>
					<div class="col-7 carrot-form-control center">
						<input type="text" class="form-control" placeholder="Username" />
					</div>
				</div>
			</div>
		</div>

		<div class="row">
			<div class="col-lg-4 col-sm-12">
				<div class="row mh-100px">
					<div class="col-5 carrot-form-label center">강사명</div>
					<div class="col-7 carrot-form-control center">
						<input type="text" class="form-control" placeholder="Username" />
					</div>
				</div>
			</div>
			<div class="col-lg-8 col-sm-12">
				<div class="row mh-100px">
					<div class="col-5 carrot-form-label center">강사명</div>
					<div class="col-7 carrot-form-control center">
						<input type="text" class="form-control" placeholder="Username" />
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	name: 'App',
};
</script>

<style lang="scss" scoped>
.carrot-form-label {
	border: 1px solid #ced4da;
	background-color: #eee;
	text-align: center;
	margin-bottom: 0px;
}

.carrot-form-control {
	border: 1px solid #ced4da;
	text-align: center;
	margin-bottom: 0px;
}

.error {
	color: rgba(255, 0, 0, 0.753);
	text-align: left;
}

.center {
	display: flex;
	align-items: center;
	justify-content: center;
}

.align-items-center {
	display: flex;
	align-items: center;
}

.jusitify-center {
	display: flex;
	justify-content: center;
}

.mh-100px {
	max-height: 100px;
	height: 100px;
}

.dp-block {
	display: block;
}

.w-100per {
	width: 100%;
}
</style>
