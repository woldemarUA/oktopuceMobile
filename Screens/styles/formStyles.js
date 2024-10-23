import { StyleSheet, Platform } from 'react-native';

const styles = StyleSheet.create({
  container: {
    // backgroundColor: '#F2F2F2', // Light gray background
    backgroundColor: '#0D0D0D', // Light gray background
    padding: 20,
    flex: 1,
  },
  containerSection: {
    borderWidth: 1,
    borderColor: '#E0E0E0',
    borderRadius: 5,
    paddingTop: 10,
    marginBottom: 8,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#F2F2F2',
    textAlign: 'center',
    marginBottom: 20,
  },
  label: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#F2F2F2', // White color for label
    marginBottom: 5,
  },
  labelError: {
    fontSize: 16,
    // fontWeight: 'bold',
    color: '#D92332', // Red color for error
    marginBottom: 5,
  },

  error: {
    fontSize: 16,
    fontStyle: 'italic',
    // fontWeight: 'bold',
    color: '#D92332', // Red color for label
    marginBottom: 5,
  },
  input: {
    backgroundColor: '#03A64A',
    borderWidth: 1,
    borderColor: '#E0E0E0',
    borderRadius: 5,
    paddingHorizontal: 10,
    paddingVertical: 8,
    marginBottom: 15,
    fontSize: 16,
    color: '#F2F2F2', // White color
  },
  radioGroup: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  radioButton: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  radioLabel: {
    fontSize: 16,
    marginLeft: 5,
    color: '#333',
  },
  dropdown: {
    // backgroundColor: '#2A8C4C',
    backgroundColor: '#03A64A',
    color: '#F2F2F2',
    borderWidth: 1,
    borderColor: '#E0E0E0',
    borderRadius: 5,
    paddingHorizontal: 10,
    fontSize: 16,
    marginBottom: 15,
    width: '100%',
    height: Platform.OS === 'web' ? 40 : 120,
  },
  dropdownItem: {
    height: 120,
    // marginVertical: 3,
    color: 'F2F2F2',
    fontSize: 18,
  },
  submitButton: {
    backgroundColor: '#388E3C', // Green background for submit button
    paddingVertical: 12,
    borderRadius: 5,
    alignItems: 'center',
  },
  submitButtonDisabled: {
    backgroundColor: '#394741', // Green background for submit button
    paddingVertical: 12,
    color: '#4A8B15',
    borderRadius: 5,
    alignItems: 'center',
  },
  submitButtonText: {
    color: '#FFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
  submitButtonTextDisabled: {
    color: '#4A8B15',
    fontSize: 16,
    fontWeight: 'bold',
  },
  row: {
    flexDirection: 'column',
    justifyContent: 'space-between', // Distribute space between children
    // alignItems: 'center',
    marginBottom: 10,
    width: '100%', // Ensure the row takes up the full width of the container
    paddingHorizontal: 10, // Optional: Add horizontal padding for some space on the sides
    // height: 10,
  },
  rowHorizont: {
    flexDirection: 'row',
    justifyContent: 'space-between', // Distribute space between children
    alignItems: 'center',
    marginBottom: 10,
    width: '100%', // Ensure the row takes up the full width of the container
    paddingHorizontal: 10, // Optional: Add horizontal padding for some space on the sides
    // height: 10,
  },
  datePicker: {
    backgroundColor: '#03A64A',
    borderWidth: 1,
    borderColor: '#E0E0E0',
    borderRadius: 5,
    color: '#F2F2F2',
    width: '100%',
  },
  dateBtn: {
    fontWeight: 'bold',
    backgroundColor: '#03A64A', // Green background for submit button
    paddingVertical: 12,
    borderRadius: 5,
    alignItems: 'center',
    width: '100%',
  },
  dateBtnLabel: {
    color: '#F2F2F2',
    fontSize: 16,
  },
  datePickerContainer: {
    marginBottom: 10,
    paddingHorizontal: 10,
  },
  dateLabel: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#F2F2F2', // White color for label
    marginBottom: 5,
  },
});

export default styles;
