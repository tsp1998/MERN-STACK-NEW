import {
  GET_BLOCKCHAIN_FAIL,
  GET_BLOCKCHAIN_START,
  GET_BLOCKCHAIN_SUCCESS,
} from "../actions/blockchain-types";

const initialState = {
  loading: false,
  blockchain: [],
  error: null,
};

const getBlockchainStart = (state, action) => ({ ...state, loading: true });
const getBlockchainFail = (state, action) => ({
  ...state,
  error: action.error,
  loading: false,
});
const getBlockchainSuccess = (state, action) => ({
  ...state,
  blockchain: [...action.blockchain],
  loading: true,
});

export default (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};
