import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { fetchCategoryList } from '../services/CategoryService';
import { fetchCountryList, fetchCountrySmallList } from '../services/CountryService';
import { fetchPrice } from '../services/ProductService';

const initialState = {
  step: 1,
  status: 'idle',
  rootSpecialtyList: [],
  rootSpecialtyListFilter: [],
  specialtyList: [],
  specialtyListFilter: [],
  countryList: [],
  formData: {
    treatment_info: null,
    rootSpecialty: null,
    specialty: null,
    hasMedicalProblem: false,
    qaOne: '',
    qaTwo: '',
    destination_country: null,
    whenTreatment: 'asap',
    salutation: 'Mr.', 
    first_name: '',
    last_name: '',
    email: '',
    country_code: '',
    phone: '',
    source_country: ''
  },
  priceList: []
};

export const fetchRootSpecialtyListAsync = createAsyncThunk(
  'specialty/fetchRootList',
  async () => {
    const response = await fetchCategoryList();
    return response.data;
  }
);

export const fetchSpecialtyListAsync = createAsyncThunk(
  'specialty/fetchList',
  async (parentId) => {
    const response = await fetchCategoryList({ parent: parentId });
    return response.data;
  }
);

export const fetchCountryListAsync = createAsyncThunk(
  'country/fetchList',
  async () => {
    const response = await fetchCountryList();
    return response.data;
  }
);

export const fetchCountrySmallListAsync = createAsyncThunk(
  'country/fetchSmallList',
  async (rootSpecialty) => {
    if (!rootSpecialty || rootSpecialty._id === '')
      return [];

    const response = await fetchCountrySmallList({ 'rootSpecialtyId': rootSpecialty._id });
    return response.data;
  }
);

export const fetchPriceAsync = createAsyncThunk(
  'country/fetchPrice',
  async (requestParams) => {
    if (!requestParams || !requestParams.specialtyId || !requestParams.countryId)
      return {};

    const response = await fetchPrice(requestParams);

    return response.data;
  }
);

export const priceSlice = createSlice({
  name: 'price',
  initialState,
  reducers: {
    changeRootSpecialty: (state, action) => {
      state.formData = {
        ...state.formData,
        rootSpecialty: {
          _id: action.payload._id,
          label: action.payload.label
        }
      }
    },
    changeSpecialty: (state, action) => {
      state.formData = {
        ...state.formData,
        specialty: {
          _id: action.payload._id,
          label: action.payload.label
        }
      }
    },
    changeHasMedicalProblem: (state, action) => {
      state.formData = {
        ...state.formData,
        hasMedicalProblem: action.payload
      }
    },
    changeQAOne: (state, action) => {
      state.formData = {
        ...state.formData,
        qaOne: action.payload
      }
    },
    changeQATwo: (state, action) => {
      state.formData = {
        ...state.formData,
        qaTwo: action.payload
      }
    },
    changeCountry: (state, action) => {
      state.formData = {
        ...state.formData,
        country: {
          _id: action.payload._id,
          label: action.payload.label,
          imageUrl: action.payload.imageUrl
        }
      }
    },
    changeWhenTreatment: (state, action) => {
      state.formData = {
        ...state.formData,
        whenTreatment: action.payload
      }
    },
    changeSalutation: (state, action) => {
      state.formData = {
        ...state.formData,
        salutation: action.payload
      }
    },
    changeFirstName: (state, action) => {
      state.formData = {
        ...state.formData,
        first_name: action.payload
      }
    },
    changeLastName: (state, action) => {
      state.formData = {
        ...state.formData,
        last_name: action.payload
      }
    },
    changeEmail: (state, action) => {
      state.formData = {
        ...state.formData,
        email: action.payload
      }
    },
    changeCountryCode: (state, action) => {
      state.formData = {
        ...state.formData,
        country_code: action.payload
      }
    },
    changePhone: (state, action) => {
      state.formData = {
        ...state.formData,
        phone: action.payload
      }
    },
    changeSourceCountry: (state, action) => {
      state.formData = {
        ...state.formData,
        source_country: action.payload
      }
    },
    incStep: (state) => {
      if (state.step === 8)
        return;

      state.step += 1;
    },
    decStep: (state) => {
      if (state.step === 1)
        return;

      state.step -= 1;
    },
    changeStep: (state, action) => {
      state.step = action.payload;
    },
    clearSpecialtyList: (state) => {
      state.specialtyList = [];
    },
    clearSpecialtyListFilter: (state) => {
      state.specialtyListFilter = [];
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchRootSpecialtyListAsync.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchRootSpecialtyListAsync.fulfilled, (state, action) => {
        state.status = 'idle';
        
        state.rootSpecialtyList = [...action.payload.data];

        const updatedRootSpecialtyListFilter = action.payload.data.map((each) => ({
          value: each._id,
          label: each.label
        }));
        state.rootSpecialtyListFilter = [{ value: '', label: 'Please choose ...' }, ...updatedRootSpecialtyListFilter];
      })
      .addCase(fetchRootSpecialtyListAsync.rejected, (state, action) => {
        state.status = 'failed'
        state.error = action.error.message
      })
      .addCase(fetchSpecialtyListAsync.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchSpecialtyListAsync.fulfilled, (state, action) => {
        state.status = 'idle';
        
        state.specialtyList = [...action.payload.data];

        const updatedSpecialtyListFilter = action.payload.data.map((each) => ({
          value: each._id,
          label: each.label
        }));
        state.specialtyListFilter = [{ value: '', label: 'Please choose ...' }, ...updatedSpecialtyListFilter];
      })
      .addCase(fetchSpecialtyListAsync.rejected, (state, action) => {
        state.status = 'failed'
        state.error = action.error.message
      })
      .addCase(fetchCountryListAsync.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchCountryListAsync.fulfilled, (state, action) => {
        state.status = 'idle';
        
        state.countryList = [...action.payload.data];
      })
      .addCase(fetchCountryListAsync.rejected, (state, action) => {
        state.status = 'failed'
        state.error = action.error.message
      })
      .addCase(fetchCountrySmallListAsync.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchCountrySmallListAsync.fulfilled, (state, action) => {
        state.status = 'idle';
        
        state.countryList = [...action.payload.data];
      })
      .addCase(fetchCountrySmallListAsync.rejected, (state, action) => {
        state.status = 'failed'
        state.error = action.error.message
      })
      .addCase(fetchPriceAsync.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchPriceAsync.fulfilled, (state, action) => {
        state.status = 'idle';

        const priceInfo = action.payload.data;
        const samePrice = state.priceList.find((each) => each.countryId === priceInfo.countryId && each.specialtyId === priceInfo.specialtyId);
        if (samePrice)
          return;

        const newPriceInfo = {
          specialtyId: priceInfo.specialtyId,
          countryId: priceInfo.countryId,
          price: priceInfo.price
        }
        
        state.priceList = [...state.priceList, newPriceInfo];
      })
      .addCase(fetchPriceAsync.rejected, (state, action) => {
        state.status = 'failed'
        state.error = action.error.message
      });
  },
});

export const {
  changeRootSpecialty,
  changeSpecialty,
  changeHasMedicalProblem,
  changeQAOne,
  changeQATwo,
  changeCountry,
  changeWhenTreatment,
  changeSalutation,
  changeFirstName,
  changeLastName,
  changeEmail,
  changeCountryCode,
  changePhone,
  changeSourceCountry,
  incStep,
  decStep,
  changeStep,
  clearSpecialtyList,
  clearSpecialtyListFilter
} = priceSlice.actions;

export const getStep = (state) => state.price.step;
export const getFormData = (state) => state.price.formData;
export const getRootSpecialtyList = (state) => state.price.rootSpecialtyList;
export const getRootSpecialtyListFilter = (state) => state.price.rootSpecialtyListFilter;
export const getSpecialtyList = (state) => state.price.specialtyList;
export const getSpecialtyListFilter = (state) => state.price.specialtyListFilter;
export const getCountryList = (state) => state.price.countryList;
export const getPriceList = (state) => state.price.priceList;

export default priceSlice.reducer;
