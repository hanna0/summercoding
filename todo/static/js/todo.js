function cancelCheck() {
	if(confirm("정말 취소하시겠습니까?")) {
		history.back();
	}
}
function deleteCheck() {
	if(!confirm("정말 삭제하시겠습니까?")) {
		return false;
	}
}
