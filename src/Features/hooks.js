import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { loadCustomers, createCustomer, resetFields, setFormField, editCustomer, setForm} from "./reducers";


export const useGetCustomersByRegion = (regionId) => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loadCustomers());
  }, [dispatch]);

  const customerList = useSelector((state) => {
    return state.customer.customers;
  });

  const customerListFilteredByRegion = customerList.filter(
    (item) => item.region.id == regionId
  );

  return customerListFilteredByRegion;
};

export const useCreateCustomer = () => {
  const dispatch = useDispatch();

  return {
    onSubmit: () => {
      dispatch(createCustomer());
    },
  };
};

export const useCreateCustomerStatus = () => {
  return useSelector((state) => state.customer.create.status);
};

export const useUpdateField = (customerId) => {
  const dispatch = useDispatch();
  const status = useSelector((state) => state.customer.edit.status);
  const fields = useSelector((state) => state.customer.form.fields);

  useEffect(() => {
    if (customerId) {
      dispatch(setForm(customerId));
    } else {
      dispatch(resetFields(customerId));
    }
  }, [customerId, status]);

  return {
    fields,
    setFormField: (field, value) => {
      dispatch(setFormField({ field, value }));
    },
  };
};

export const useEditCustomerStatus = () => {
  return useSelector((state) => state.customer.edit.status);
};

export const useEditCustomer = (customerId) => {
  const dispatch = useDispatch();
  const status = useEditCustomerStatus();

  return {
    status,
    onSubmit: () => {
      console.log("Dispatching EDIT_CUSTOMER action");
      dispatch(editCustomer(customerId));
    },
  };
};
