import http from './httpService'
export function changeProposalStatus({id,data}) {
    return http.patch(`/proposal/${id}`,data).then(({ data }) => data.data)
}
