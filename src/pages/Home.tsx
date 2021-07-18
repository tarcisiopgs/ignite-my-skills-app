import React, {useState, useCallback, useEffect} from 'react';
import {
  StyleSheet,
  TextInput,
  Platform,
  FlatList,
  View,
  Text,
} from 'react-native';

import SkillCard from '../components/SkillCard';
import Button from '../components/Button';

interface SkillData {
  name: string;
  id: string;
}

const Home: React.FC = () => {
  const [skills, setSkills] = useState<SkillData[]>([]);
  const [skillText, setSkillText] = useState<string>('');
  const [gretting, setGretting] = useState<string>('');

  const handleChangeSkillText = useCallback(
    (text): void => setSkillText(text),
    [setSkillText],
  );

  const handleAddSkill = useCallback((): void => {
    if (skillText) {
      const data: SkillData = {
        id: String(new Date().getTime()),
        name: skillText,
      };

      setSkills(prevState => [...prevState, data]);
    }
  }, [skillText, setSkills]);

  const handleDeleteSkill = useCallback((id: string): void => {
    setSkills(prevState => prevState.filter(item => item.id !== id));
  }, []);

  useEffect((): void => {
    const currentHour = new Date().getHours();

    if (currentHour < 12) {
      setGretting('Good morning');
    } else if (currentHour >= 12 && currentHour <= 18) {
      setGretting('Good afternoon');
    } else {
      setGretting('Good everning');
    }
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome, Tarcísio</Text>
      <Text style={styles.greetings}>{gretting}</Text>
      <TextInput
        onChangeText={handleChangeSkillText}
        placeholderTextColor="#555555"
        placeholder="New skill"
        style={styles.input}
        value={skillText}
      />
      <Button title="Add" onPress={handleAddSkill} />
      <Text style={[styles.title, styles.fixMarginTopTitle]}>My Skills</Text>
      <FlatList
        renderItem={({item}) => (
          <SkillCard
            onPress={() => handleDeleteSkill(item.id)}
            skill={item.name}
          />
        )}
        showsVerticalScrollIndicator={false}
        keyExtractor={item => item.id}
        data={skills}
      />
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  title: {fontWeight: 'bold', color: '#FFFFFF', fontSize: 24},
  fixMarginTopTitle: {marginVertical: 50},
  input: {
    padding: Platform.OS === 'ios' ? 15 : 10,
    backgroundColor: '#1F1E25',
    color: '#FFFFFF',
    borderRadius: 7,
    marginTop: 30,
    fontSize: 18,
  },
  container: {
    backgroundColor: '#121015',
    paddingHorizontal: 30,
    paddingVertical: 70,
    flex: 1,
  },
  greetings: {color: '#FFF'},
});
