<template>
	<div class="container">
		<modal :visible="true">
			<div class="popup-content">
				<div class="header">
					<div class="info">
						<img class="user-avatar" :src="user.avatar" alt="user-avatar">
						<div class="user-name">
							{{user.name}}
						</div>
					</div>
					<div class="tools">
						<button class="btn edit" @click="showEdit">Edit</button>
						<button class="btn close" @click="showDelete">Delete</button>
					</div>
				</div>
				<div class="info-text">Information</div>
				<div class="other-info">
					<li v-for="val,key in filteredUser"
							class="info-item">
						<font-awesome-icon :icon="val[1]" class="info-icon"/>
						{{val[0]}}
					</li>
				</div>
			</div>
		</modal>
	</div>
</template>

<script>
	import Modal from './Modal.vue'
	import Edit from './Edit.vue'
	import Delete from './Delete.vue'
	export default {
		components: {
			Modal,
			Edit,
			Delete
		},
		props: ["user"],
		data() {
			return {
 	 		}
		},
		methods: {
			showEdit: function() {
				this.$parent.showEditModal(this.user);
			},
			showDelete: function() {
				this.$parent.showDeleteModal(this.user.id);
			}
		},
		computed: {
			filteredUser: function() {
				//console.log(this.user)
				//Filtering user information by 'icons' keys
				const icons = {
							'username': ['fas', 'user-alt'],
							'email': ['fas', 'envelope'],
							'phone': ['fas','phone'],
							'address': ['fas', 'address-card'],
							'website': ['fas', 'globe']}
				const filtered = Object.keys(this.user)
								.filter(key=> icons.hasOwnProperty(key))
								.reduce((obj,key) => {
									obj[key] = [this.user[key], icons[key]];
									return obj;
								}, {});

				// get only city and country for address
				if(filtered['address'][0]['city'] && filtered['address'][0]['country'])
					filtered['address'][0] = filtered['address'][0]['city'] + ", " + filtered['address'][0]['country']
				return filtered
			}
		},
	}
</script>

<style lang="scss" scoped>
	.popup-content {
			min-width: 640px;
			min-height: 400px;
			background: white;
			border-radius: 20px;
			.header {
				display: flex;
				justify-content: space-between;
				padding: 30px;
				border-bottom: 1px solid #ccc;
				.info {
					display: flex;
					align-items: flex-start;
					$p: 60px;
					.user-avatar {
						width: $p;
						height: $p;
						margin-right: 50px;
						border-radius: 50%;
					}
					.user-name {
						font-family: "Open Sans", sans-serif;
						font-size: 20px;
					}
				}
			}
			.info-text {
				font-size: 20px;
				padding: 20px 30px;
			}
			.other-info {
				padding: 0px 30px;
				.info-item {
					padding: 10px 0;
					list-style: none;
					.info-icon {
						margin: 0 15px
					}
				}
			}
	}
</style>