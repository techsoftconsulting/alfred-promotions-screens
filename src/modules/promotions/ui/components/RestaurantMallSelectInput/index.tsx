import SelectInput, { SelectInputProps } from '@main-components/Form/inputs/SelectInput';
import useFindRestaurantMalls from '@modules/promotions/application/malls/use-find-restaurant-malls';

interface RestaurantCategorySelectInputProps extends Omit<SelectInputProps, 'choices'> {

}

export default function RestaurantMallSelectInput(props: RestaurantCategorySelectInputProps) {
    const { data, loading } = useFindRestaurantMalls();

    return (
            <SelectInput
                    {...props}
                    choices={data?.map(e => {
                        return {
                            id: e.id,
                            label: e.name,
                            name: e.name
                        };
                    })}
            />
    );
}