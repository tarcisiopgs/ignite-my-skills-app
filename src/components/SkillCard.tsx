import React from 'react';
import {
  TouchableOpacityProps,
  TouchableOpacity,
  StyleSheet,
  Text,
} from 'react-native';

interface SkillCardProps extends TouchableOpacityProps {
  skill: string;
}

const SkillCard: React.FC<SkillCardProps> = ({skill, ...rest}) => {
  return (
    <TouchableOpacity style={styles.buttonSkill} activeOpacity={0.7} {...rest}>
      <Text style={styles.buttonSkillText}>{skill}</Text>
    </TouchableOpacity>
  );
};

export default SkillCard;

const styles = StyleSheet.create({
  buttonSkillText: {
    fontWeight: 'bold',
    color: '#FFFFFF',
    fontSize: 22,
  },
  buttonSkill: {
    backgroundColor: '#1F1E25',
    alignItems: 'center',
    marginVertical: 10,
    borderRadius: 50,
    padding: 15,
  },
});
