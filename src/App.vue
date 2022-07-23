<template>
	<div class="container">
		<div class="row">
			<div class="col-lg-4 col-sm-12">
				<Field id="name" name="name" label="name" rules="required" v-slot="{ field, errors }">
					<div class="row h-100px">
						<div class="col-3 carrot-form-label center">강사명</div>
						<div class="col-9 carrot-form-control center">
							<div class="w-100per h-60px">
								<input type="text" v-bind="field" class="form-control" placeholder="Username" />
								<div :class="errors[0] ? 'error' : ''" class="dp-block mh-20px lh-20px">{{ errors[0] }}</div>
							</div>
						</div>
					</div>
				</Field>
			</div>
			<div class="col-lg-8 col-sm-12">
				<div class="row h-100px">
					<div class="col-3 col-sm-3 carrot-form-label center">강사명</div>
					<div class="col-9 col-sm-9 carrot-form-control center pt-15px">
						<div class="w-100per h-60px">
							<input type="text" class="form-control" placeholder="Username" />
							<div class="dp-block mh-20px lh-20px"></div>
						</div>
					</div>
				</div>
			</div>
		</div>

		<div class="row">
			<div class="col-lg-4 col-sm-12">
				<div class="row h-100px">
					<div class="col-3 carrot-form-label center">강사명</div>
					<div class="col-9 carrot-form-control center">
						<div class="w-100per h-60px">
							<input type="text" class="form-control" placeholder="Username" />
							<div class="error dp-block mh-20px">강사명은 필수 값입니다.</div>
						</div>
					</div>
				</div>
			</div>
			<div class="col-lg-8 col-sm-12">
				<div class="row h-100px">
					<div class="col-3 carrot-form-label center">강사명</div>
					<div class="col-9 carrot-form-control center pt-15px">
						<div class="w-100per h-60px">
							<input type="text" class="form-control" placeholder="Username" />
							<div class="dp-block mh-20px"></div>
						</div>
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

<style lang="scss">
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

.h-100px {
	height: 100px;
}

.h-100per {
	height: 100%;
}

.lh-12 {
	line-height: 1.2em;
}

.h-20px {
	height: 20px;
}

.mh-20px {
	min-height: 20px;
	height: 100%;
}

.pt-15px {
	padding-top: 15px;
}

.lh-20px {
	line-height: 20px;
}

.h-60px {
	height: 60px;
}
</style>
