<template>
	<div class="container">
		<div class="row">
			<div class="col-lg-4 col-sm-12">
				<Field id="name" name="name" label="강사명" rules="required" v-slot="{ field, errors }">
					<div class="row h-100px">
						<div class="col-3 carrot-form-label center">강사명</div>
						<div class="col-9 carrot-form-control center">
							<div class="w-100per h-60px mt-15px">
								<input type="text" v-bind="field" class="form-control" placeholder="강사명" />
								<div :class="errors[0] ? 'error' : ''" class="dp-block h-20px lh-20px">{{ errors[0] }}</div>
							</div>
						</div>
					</div>
				</Field>
			</div>
			<div class="col-lg-8 col-sm-12">
				<Field id="kname" name="kname" label="국문명" rules="required" v-slot="{ field, errors }">
					<div class="row h-100px">
						<div class="col-3 col-sm-3 carrot-form-label center">국문명</div>
						<div class="col-9 col-sm-9 carrot-form-control center">
							<div class="w-100per h-60px mt-15px">
								<input type="text" v-bind="field" class="form-control" placeholder="국문명" />
								<div :class="errors[0] ? 'error' : ''" class="dp-block h-20px lh-20px">{{ errors[0] }}</div>
							</div>
						</div>
					</div>
				</Field>
			</div>
		</div>

		<div class="row">
			<div class="col-lg-12 col-sm-12">
				<Field id="eName" name="eName" label="영문명" rules="required" v-slot="{ field, errors }">
					<div class="row h-100px">
						<div class="col-3 col-lg-1 carrot-form-label center">영문명</div>
						<div class="col-9 col-lg-11 carrot-form-control center">
							<div class="w-100per h-60px mt-15px">
								<input type="text" v-bind="field" class="form-control" placeholder="영문명" />
								<div :class="errors[0] ? 'error' : ''" class="dp-block h-20px lh-20px">{{ errors[0] }}</div>
							</div>
						</div>
					</div>
				</Field>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	name: "App",
};
</script>

<style lang="scss">
/*
*/
</style>
